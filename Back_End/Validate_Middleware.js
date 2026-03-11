const express = require('express');
const app = express();

const path=require('path');
// Serve static HTML files
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Validate a user creation request
function validateUserCreation(req, res, next) {
  const { username, email, password } = req.body;

  
  // Simple validation
  if (!username || username.length < 4) {
    return res.status(400).json({ error: 'Username must be at least 4 characters' });
  }
  
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required' });
  }
  
  if (!password || password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  }
  
  // Validation passed
  next();
}

// Apply to user creation route
app.post('/api/users', validateUserCreation, (req, res) => {
  // Process valid user creation
  console.log('Invoked');
  res.status(201).json({ message: 'User created successfully' });
});

// Start the server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Try making a request to http://localhost:8080/');
});

// http://localhost:8080/User.html