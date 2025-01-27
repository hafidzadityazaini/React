import React, { useState, useEffect } from 'react';
const CountLogger = () => {
  const [count, setCount] = useState(0);
  // useEffect dengan array dependency berisi count
  useEffect(() => {
    console.log(`Count berubah menjadi: ${count}`);
  }, [count]); // Efek hanya dijalankan saat count berubah
  const handleTambah = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleTambah}>Tambah</button>
    </div>
  );
};
export default CountLogger;