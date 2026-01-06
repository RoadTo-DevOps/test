# Use a Node.js base image
FROM node:24-alpine3.22 AS builder

# Create app directory
WORKDIR /usr/src/app

#PROD env
ENV NODE_ENV=production

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./
RUN npm ci

#Copy all host into container directory
COPY . .

#run = prod
RUN npm prune --production

#RUN stage
FROM gcr.io/distroless/nodejs24:nonroot AS runtime

WORKDIR /usr/src/app

# Copy app build va pruned to builder stage
COPY --from=builder /usr/src/app /usr/src/app

# Expose port app
EXPOSE 3000

# Command to run the application
CMD ["index.js"]

