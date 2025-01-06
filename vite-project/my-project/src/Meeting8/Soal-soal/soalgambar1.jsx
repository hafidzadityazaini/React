import React, { useState } from "react";
import { useState } from "react";
function Increment() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount(count + 20)}>Tambah</button>
      <button onClick={() => setCount(count - 10)}>Kurang</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}
export default Increment;