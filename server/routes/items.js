const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// Create new item
router.post('/items', async (req, res) => {
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json({ message: 'Item created successfully', itemId: item._id });
  } catch (error) {
    console.error('Item creation error:', error);
    res.status(500).json({ message: 'Failed to create item' });
  }
});

// Get all items
router.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).json({ message: 'Failed to fetch items' });
  }
});

module.exports = router;