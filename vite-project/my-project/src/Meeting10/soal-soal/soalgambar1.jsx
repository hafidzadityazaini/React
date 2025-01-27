import React, { useState, useEffect } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  // useEffect tanpa array dependency
  useEffect(() => {
    console.log("Efek dijalankan!");
  });
  const handleTambah = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1 className="text-[30px] font-bold text-blue-500 mb-5 ml-7">{count}</h1>
      <button
        onClick={handleTambah}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Tambah
      </button>
    </div>
  );
};
export default Counter;