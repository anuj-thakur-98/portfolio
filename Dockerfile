# Use Node.js 20.16.0 as the base image
FROM node:20.16.0-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first (for better caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the Next.js default port
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "run", "start"]
