// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use the static files
app.use(express.static('public'));

// Use the middleware
app.use(express.json());

// Use the middleware
app.use(express.urlencoded());

// Use the middleware
app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

// Get the comments
app.get('/comments', (req, res) => {
  res.send('Get the comments');
});

// Post the comments
app.post('/comments', (req, res) => {
  res.send('Post the comments');
});

// Put the comments
app.put('/comments', (req, res) => {
  res.send('Put the comments');
});

// Delete the comments
app.delete('/comments', (req, res) => {
  res.send('Delete the comments');
});

// Listen to the port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
