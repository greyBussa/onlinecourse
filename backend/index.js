const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Set up MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // Replace with your MySQL username
  password: '',       // Replace with your MySQL password
  database: 'online_courses',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the MySQL database');
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API endpoint to handle form submission
app.post('/api/subscribe', (req, res) => {
  const { firstName, lastName, email, course } = req.body;


  if (!firstName || !lastName || !email || !course) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  // Insert data into MySQL table
  const query = 'INSERT INTO subscriptions (first_name, last_name, email, course) VALUES (?, ?, ?, ?)';
  db.query(query, [firstName, lastName, email, course], (err, result) => {
    if (err) {
      console.error('Error inserting data: ' + err.stack);
      return res.status(500).json({ message: 'Database error' });
    }
    res.status(200).json({ message: 'Subscription successful' });
  });
});


// Payment endpoint
app.post('/api/payment', (req, res) => {
  const { firstName, lastName, email, course } = req.body;

  // MySQL query to insert data
  const query = `INSERT INTO payments (firstName, lastName, email, course) VALUES (?, ?, ?, ?)`;
  db.query(query, [firstName, lastName, email, course], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ message: 'Something went wrong. Please try again.' });
    }

    // Successfully inserted data, return success response
    res.status(200).json({ message: 'Proceed with Payement!' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
