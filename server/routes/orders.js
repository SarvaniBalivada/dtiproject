const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Create new order
router.post('/orders', async (req, res) => {
  try {
    const { userId, itemId, deliveryAddress, paymentMethod } = req.body;

    const order = new Order({
      userId,
      itemId,
      deliveryAddress,
      paymentMethod,
      status: 'pending',
      createdAt: new Date()
    });

    await order.save();
    res.status(201).json({ 
      success: true,
      message: 'Order placed successfully',
      orderId: order._id 
    });
  } catch (error) {
    console.error('Order creation error:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to create order' 
    });
  }
});

module.exports = router;