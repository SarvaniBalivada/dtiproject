const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json()); // Ensure JSON parsing middleware is used

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// Serve favicon
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/favicon.ico'));
});

// Serve manifest.json
app.get('/manifest.json', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/manifest.json'));
});

// Define the /api/items route
app.post('/api/items', (req, res) => {
  // Handle the request and respond
  const { title, description, category, price, imageUrl, listingType, wasteCategory, quantity } = req.body;
  
  // Validate required fields
  if (!title || !description || !wasteCategory || !quantity || !imageUrl) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Simulate saving the item (replace with actual database logic)
  const newItem = {
    id: Date.now(),
    title,
    description,
    category,
    price: listingType === 'sell' ? price : 0,
    imageUrl,
    listingType,
    wasteCategory,
    quantity
  };

  console.log('Item saved:', newItem);
  res.status(201).json(newItem);
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});