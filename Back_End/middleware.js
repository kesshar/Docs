const express = require('express');
const app = express();

// First middleware
app.use((req, res, next) => {
  console.log('Middleware 1: This always runs');
  next();
});

// Custom Middleware
// Create a simple logging middleware
function requestLogger(req, res, next) {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp} - ${req.method} ${req.url}`);
  next(); // Don't forget to call next()
}

// Use the middleware
app.use(requestLogger);


// Route handler
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Second middleware
app.use((req, res, next) => {
  console.log('Middleware 2: This also always runs');
  next();
});

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Try making a request to http://localhost:8080/');
});