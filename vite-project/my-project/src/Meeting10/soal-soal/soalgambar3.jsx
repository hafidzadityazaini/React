import React, { useState, useEffect } from 'react';
const TextLogger = () => {
  const [text, setText] = useState('');
  const [updatedText, setUpdatedText] = useState('');
  // useEffect dengan array dependency berisi text
  useEffect(() => {
    console.log(`Teks berubah menjadi: ${text}`);
  }, [text]); // Efek hanya dijalankan saat text berubah
  const handleInputChange = (event) => {
    setText(event.target.value);
  };
  const handleUpdateText = () => {
    setUpdatedText(text); // Simulasi pembaruan teks
  };
  return (
    <div>
      <input 
        type="text" 
        value={text} 
        onChange={handleInputChange} 
        placeholder="Masukkan teks" 
      />
      <button onClick={handleUpdateText}>Update Teks</button>
      <p>Teks yang dimasukkan: {updatedText}</p>
    </div>
  );
};
export default TextLogger;