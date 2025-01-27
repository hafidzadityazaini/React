import React, { useState } from 'react';
const ArrayStateExample = () => {
  const [items, setItems] = useState([]);
  const addItem = () => {
    const newItem = { id: items.length + 1, value: `Item ${items.length + 1}` };
    setItems([...items, newItem]);
  };
  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };
  const updateItem = (id, newValue) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, value: newValue } : item
    ));
  };
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.value}
            <button onClick={() => updateItem(item.id, `Updated ${item.id}`)}>Update</button>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ArrayStateExample;