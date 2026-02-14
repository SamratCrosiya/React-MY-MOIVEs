# Use Node.js base image (small, secure)
FROM node:18-alpine AS base

# Set working directory
WORKDIR /app

# Install dependencies only when needed
COPY package*.json ./
RUN npm ci --only=production

# Copy project files
COPY . .

# Expose port
EXPOSE 3000

# Run the app
CMD ["npm", "start"]