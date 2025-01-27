import React, { useState } from 'react';
const MapStateExample = () => {
    const [map, setMap] = useState(new Map());
  
    const addOrUpdateItem = (key, value) => {
      setMap(prevMap => {
        const newMap = new Map(prevMap);  // Salin Map lama
        newMap.set(key, value);           // Tambahkan atau perbarui pasangan key-value
        return newMap;                    // Kembalikan Map yang sudah diperbarui
      });
    };
  
    const removeItem = (key) => {
      setMap(prevMap => {
        const newMap = new Map(prevMap);  // Salin Map lama
        newMap.delete(key);               // Hapus pasangan dengan key tertentu
        return newMap;                    // Kembalikan Map yang sudah diperbarui
      });
    };
  
    const clearMap = () => {
      setMap(new Map());  // Mengganti Map dengan Map baru yang kosong
    };
  
    return (
      <div>
        <button onClick={() => addOrUpdateItem('key1', 'value1')}>Add/Update Key1</button>
        <button onClick={() => addOrUpdateItem('key2', 'value2')}>Add/Update Key2</button>
        <button onClick={() => removeItem('key1')}>Remove Key1</button>
        <button onClick={clearMap}>Clear Map</button>
        
        <h3>Map Contents:</h3>
        <ul>
          {Array.from(map.entries()).map(([key, value]) => (
            <li key={key}>{key}: {value}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default MapStateExample; 