import React from 'react';
import ItemCard from './ItemCard';
import './ItemCard.css';

function ItemList({ items }) {
  return (
    <div className="item-card-container">
      {items.map(item => (
        <ItemCard key={item._id} item={item} />
      ))}
    </div>
  );
}

export default ItemList;