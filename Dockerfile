# Step 1: Build the Svelte application
# Use a Node.js image to build the Svelte app
FROM node:16 AS build
WORKDIR /app

# Copy package files and install dependencies
COPY package.json bun.lockb ./
RUN bun install

# Copy the rest of the application files
COPY . .

# Build the Svelte app
RUN bun run build

# Step 2: Serve the built application
# Use an Nginx image to serve the static files
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port Nginx is running on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
