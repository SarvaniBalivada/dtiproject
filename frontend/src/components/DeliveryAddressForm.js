import React, { useState } from 'react';
import './DeliveryAddressForm.css';

const DeliveryAddressForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    street: '',
    area: '',
    city: '',
    state: '',
    pincode: '',
    contactNumber: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    const fullAddress = `${formData.street}, ${formData.area}, ${formData.city}, ${formData.state} - ${formData.pincode}\nContact: ${formData.contactNumber}`;
    onSubmit(fullAddress);
  };

  return (
    <div className="delivery-form">
      <h2>Delivery Address</h2>
      <div className="form-group">
        <input
          type="text"
          name="street"
          placeholder="House/Flat No., Street Name"
          value={formData.street}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="area"
          placeholder="Area/Locality"
          value={formData.area}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          name="pincode"
          placeholder="PIN Code"
          value={formData.pincode}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <input
          type="tel"
          name="contactNumber"
          placeholder="Contact Number"
          value={formData.contactNumber}
          onChange={handleChange}
        />
      </div>
      <div className="form-actions">
        <button onClick={onCancel}>CANCEL</button>
        <button onClick={handleSubmit} className="confirm-btn">
          CONFIRM ORDER
        </button>
      </div>
    </div>
  );
};

export default DeliveryAddressForm;