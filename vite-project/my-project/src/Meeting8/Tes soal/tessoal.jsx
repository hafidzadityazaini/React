import { useState } from "react";
function Example() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Adit");
  const [item, setItem] = useState(["React", "Javascript", "CSS"]);
  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount(count + 20000)}>Tambah</button>
      <button onClick={() => setCount(count - 100)}>Kurang</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}
export default Example;