# Dockerfile for a Standalone Next.js App (Recommended)

# --- Base Image ---
# Use a specific Node.js version for reproducibility. 'base' will be used for all stages.
FROM node:20-alpine AS base
WORKDIR /app
ENV NODE_ENV=production


# --- Dependencies Stage ---
# Install only production dependencies to keep the image small.
# This leverages Docker's layer caching, so dependencies are only re-installed when package.json changes.
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm install --production


# --- Builder Stage ---
# Copy all source code and build the application.
# The build output will include the '.next/standalone' directory.
FROM base AS builder
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build


# --- Runner Stage ---
# This is the final, minimal production image.
# It copies only the necessary artifacts from the builder stage.
FROM base AS runner

# Copy the standalone server and its dependencies
COPY --from=builder /app/.next/standalone ./

# Copy the public assets (images, fonts, etc.)
COPY --from=builder /app/public ./public

# Copy the optimized static assets (JS, CSS, etc.) built by Next.js
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
ENV PORT 3000

# Start the Node.js server that runs your Next.js application.
CMD ["node", "server.js"]

