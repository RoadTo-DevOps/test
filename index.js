const express = require("express");
const app = express();

// Default port for the Node app
const defaultPort = 3000;

// Define ports for services based on environment variables or defaults
const ports = {
  apiSvc: process.env.APP_PORT || defaultPort,
};

const app_name = {
  nameSvc: process.env.APP_NAME || "api-svc",
};

// Endpoint for /<service>/health
app.get(`/${app_name.nameSvc}/health`, (req, res) => {
  res.send("Hello World!");
});

// Start the server only when the file is run directly
if (require.main === module) {
  app.listen(ports.apiSvc, () => {
    console.log(`Service is running on port ${ports.apiSvc}`);
  });
}

module.exports = app;
