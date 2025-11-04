# Use a Node.js base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Note: For production, pass sensitive ENV vars at runtime via docker run -e or docker-compose
# These are placeholders that should be overridden at deployment time
ENV NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="AIzaSyAD9Nbl9RGvTAXDNiG2ixxbHqBzox17qUY" \
    ZAPIER_DEMO_WEBHOOK_URL="<ZAPIER_DEMO_WEBHOOK_URL>" \
    ZAPIER_WA_MODAL_WEBHOOK_URL="<ZAPIER_WA_MODAL_WEBHOOK_URL>" \
    INTERNAL_AUTH_USER="<INTERNAL_AUTH_USER>" \
    INTERNAL_AUTH_PASSWORD="<INTERNAL_AUTH_PASSWORD>" \
    NODE_ENV="<NODE_ENV>" \
    NEXT_PUBLIC_POSTHOG_KEY="<NEXT_PUBLIC_POSTHOG_KEY>" \
    NEXT_PUBLIC_POSTHOG_HOST="<NEXT_PUBLIC_POSTHOG_HOST>" \
    N8N_CHAT_WEBHOOK_URL="<N8N_CHAT_WEBHOOK_URL>" \
    N8N_WEBHOOK_URL="<N8N_WEBHOOK_URL>" \
    N8N_REDEEM_WEBHOOK_URL="https://franbreciano.app.n8n.cloud/webhook/1dad3f6b-717d-4ee9-b2e8-48b84a7a258b"

# Copy package.json and package-lock.json to leverage Docker cache
COPY package.json package-lock.json ./

# Install ALL dependencies (development and production)
# Using npm ci for cleaner, more reproducible builds
# Clean install helps avoid esbuild ETXTBSY race condition errors
RUN npm cache clean --force && \
    npm ci --prefer-offline --no-audit && \
    npm install tsx -g

# Copy the rest of the application source code (including 'src', 'public', etc.)
COPY . .

# Expose port 3000, the default Next.js development port
EXPOSE 3000

# Set the HOST to 0.0.0.0 so the server is accessible from outside the container
ENV HOST="0.0.0.0"

RUN npm run build
# Command to run the development server
# Make sure your package.json has a "dev" script, e.g., "next dev".
CMD ["npm", "run", "start"]
