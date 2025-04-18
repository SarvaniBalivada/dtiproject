import React, { useState } from 'react';
import DeliveryAddressForm from './DeliveryAddressForm';

const ItemCard = ({ item }) => {
  const [showDeliveryForm, setShowDeliveryForm] = useState(false);

  const handleBuyNow = () => {
    setShowDeliveryForm(true);
  };

  const handleSubmitOrder = async (deliveryAddress) => {
    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          itemId: item._id,
          deliveryAddress
        }),
      });

      const data = await response.json();
      if (data.success) {
        alert('Order placed successfully!');
        setShowDeliveryForm(false);
      } else {
        alert(data.error || 'Failed to place order');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to place order');
    }
  };

  return (
    <div className="item-card">
      {/* ... existing item display code ... */}
      
      <button onClick={handleBuyNow}>Buy Now</button>

      {showDeliveryForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <DeliveryAddressForm 
              onSubmit={handleSubmitOrder}
              onCancel={() => setShowDeliveryForm(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

// Add these styles to your CSS
const additionalStyles = `
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
`;

export default ItemCard;