import { useEffect, useState } from "react";
function CounterLogger() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Count Berubah menjadi ${count} `);
  }, [count]);
  return (
    <div>
      <p>Angka : {count}</p>
      <button onClick={() => setCount(count + 1)}>Tambah </button>
    </div>
  );
}
export default CounterLogger;