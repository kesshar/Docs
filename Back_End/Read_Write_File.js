const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// File paths
const sourceFile = path.join(__dirname, 'sourceFile.txt');
const destinationFile = path.join(__dirname, 'destinationFile.txt');

/**
 * Custom Middleware:
 * 1. Read data from source file
 * 2. Write data into destination file
 * 3. Attach data to req object
 */
function fileTransferMiddleware(req, res, next) {
  fs.readFile(sourceFile, 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('Error reading source file');
    }

    fs.writeFile(destinationFile, data, (err) => {
      if (err) {
        return res.status(500).send('Error writing destination file');
      }

      // Attach data to request for later use
      req.fileData = data;
      next();
    });
  });
}

// Route using custom middleware
app.get('/copy-file', fileTransferMiddleware, (req, res) => {
  res.send({
    status: 'success',
    message: 'File data copied successfully using middleware',
    data: req.fileData
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});