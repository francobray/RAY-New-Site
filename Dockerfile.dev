# Use a Node.js base image
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app
ENV HOST 0.0.0.0 

# Copy package.json and package-lock.json to leverage Docker cache
COPY package.json package-lock.json ./

# Install ALL dependencies (development and production)
# We don't use --production here because we need dev tools like TypeScript and Webpack.
RUN npm install

# Copy the rest of the application source code (including 'src', 'public', etc.)
COPY . .

# Expose port 3000, the default Next.js development port
EXPOSE 3000

# Set the HOST to 0.0.0.0 so the server is accessible from outside the container
ENV HOST 0.0.0.0

# Command to run the development server
# Make sure your package.json has a "dev" script, e.g., "next dev".
CMD ["npm", "run", "dev"]
