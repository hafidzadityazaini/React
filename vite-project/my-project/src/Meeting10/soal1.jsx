import { useState } from "react";
import { useEffect } from "react";
function Soal1() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Efek dijalankan !`);
  });
  return (
    <div>
      <p>Angka : {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah </button>
    </div>
  );
}
export default Soal1;