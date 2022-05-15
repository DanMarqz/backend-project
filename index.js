const express = require('express');
const path = require('path');
const ejs = require('ejs');

const app = express();
const port = process.env.PORT || 3000;

// Settings
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.get('/api/users', (req, res) => {
  res.json(
    [
      {name: 'John'}, 
      {name: 'Sara'}
    ]
  )
});

app.get('/profile', (req, res) => {
  res.render('profile', {
    name: 'John',
    age: 24
  })
});


// Static Files
app.use(express.static('public'));

// Starting Server
app.listen(port);
console.log(`Server listening on port ${port}`);