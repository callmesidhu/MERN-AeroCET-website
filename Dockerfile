# Use an official Node runtime image that matches your version.
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your Node.js app listens on (adjust if needed)
EXPOSE 3001

# Start your application
CMD ["npm", "start"]
