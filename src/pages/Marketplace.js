import React, { useState, useEffect } from 'react';
import { Grid, Box, Typography, TextField, Select, MenuItem, Container, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import ItemCard from '../components/ItemCard';

function Marketplace() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [deliveryAddress, setDeliveryAddress] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/items');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []);

  const filteredItems = items.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !category || item.category === category;
    return matchesSearch && matchesCategory;
  });

  const handleBuyNow = async (item) => {
    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemId: item._id,
          deliveryAddress,
          paymentMethod: 'COD'
        })
      });

      if (response.ok) {
        alert('Order placed successfully! You will receive it within 2-3 business days.');
        setOpenDialog(false);
        setDeliveryAddress('');
        setSelectedItem(null);
      } else {
        throw new Error('Failed to place order');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Failed to place order. Please try again.');
    }
  };

  const handleOpenBuyDialog = (item) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ padding: 3 }}>
        <Typography 
          variant="h2" 
          align="center" 
          sx={{ 
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: 3,
            color: '#2c3e50'
          }}
        >
          Marketplace
        </Typography>

        <Box sx={{ 
          display: 'flex', 
          gap: 2, 
          marginBottom: 4,
          justifyContent: 'center'
        }}>
          <TextField
            placeholder="Search items..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            size="small"
            sx={{ width: 200 }}
          />
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            size="small"
            sx={{ width: 150 }}
            displayEmpty
          >
            <MenuItem value="">All Categories</MenuItem>
            <MenuItem value="plastic">Plastic</MenuItem>
            <MenuItem value="paper">Paper</MenuItem>
            <MenuItem value="glass">Glass</MenuItem>
            <MenuItem value="metal">Metal</MenuItem>
          </Select>
        </Box>

        <Grid container spacing={3}>
          {filteredItems.map(item => (
            <Grid item xs={12} sm={6} md={4} key={item._id}>
              <ItemCard 
                item={item} 
                onBuyClick={() => handleOpenBuyDialog(item)}
              />
            </Grid>
          ))}
        </Grid>

        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Delivery Address</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Enter your delivery address"
              type="text"
              fullWidth
              multiline
              rows={4}
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
            <Button 
              onClick={() => handleBuyNow(selectedItem)}
              variant="contained" 
              color="primary"
              disabled={!deliveryAddress.trim()}
            >
              Confirm Order
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
}

export default Marketplace;