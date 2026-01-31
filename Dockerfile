# Build stage
FROM node:20-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY pnpm-lock.yaml* ./

# Install pnpm and dependencies
RUN npm install -g pnpm && \
    pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build arguments for environment variables
ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

# Build the application
RUN pnpm run build

# Production stage
FROM node:20-alpine AS production

# Install serve to serve static files
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy built files from builder
COPY --from=builder /app/dist ./dist

# Copy serve configuration
COPY serve.json ./serve.json

# Expose port 3000
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost:3000/ || exit 1

# Start serve with configuration
CMD ["serve", "-c", "serve.json", "-l", "3000"]
