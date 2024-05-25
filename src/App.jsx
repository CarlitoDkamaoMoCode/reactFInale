import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [brandName, setBrandName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const addItem = () => {
    if (brandName.trim() !== '' && category.trim() !== '' && price.trim() !== '') {
      const newItem = {
        brandName: brandName,
        category: category,
        price: price
      };
      setItems([...items, newItem]);
      setBrandName('');
      setCategory('');
      setPrice('');
    }
  };

  return (
    <div className="container">
      <div className="form">
        <h2>Add Item</h2>
        <div className="form-group">
          <label htmlFor="brandName">Brand Name:</label>
          <input type="text" id="brandName" value={brandName} onChange={(e) => setBrandName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <button className="btn-add" onClick={addItem}>Add Item</button>
      </div>
      <div className="items">
        <h2>Items</h2>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <strong>{item.brandName}</strong> - {item.category} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
