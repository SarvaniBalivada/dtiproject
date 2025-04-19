const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Enable CORS for your Netlify domain
app.use(cors({
  origin: 'https://renewwaste.netlify.app'
}));

app.use(express.json()); // Ensure JSON parsing middleware is used

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// Define the POST /api/items route
app.post('/api/items', (req, res) => {
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

// Define the POST /api/feedback route
app.post('/api/feedback', (req, res) => {
  const { name, email, message } = req.body;

  // Simulate saving feedback (replace with actual database logic)
  const feedback = {
    id: Date.now(),
    name,
    email,
    message
  };

  console.log('Feedback received:', feedback);
  res.status(201).json({ message: 'Feedback submitted successfully' });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});