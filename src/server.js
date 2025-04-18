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

// Serve favicon
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/favicon.ico'));
});

// Serve manifest.json
app.get('/manifest.json', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/manifest.json'));
});

// Define the GET /api/items route





// Define the POST /api/auth/login route
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  // Simulate user authentication (replace with actual authentication logic)
  if (email === 'test@example.com' && password === 'password') {
    res.status(200).json({ token: 'fake-jwt-token', userId: 1 });
  } else {
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

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

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});