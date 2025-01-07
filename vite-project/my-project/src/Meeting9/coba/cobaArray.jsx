import { useState } from "react";
function SimpleNameList() {
  const [names, setNames] = useState(["Alice", "Bob"]);
  return (
    <div>
      <h2>Daftar Nama : </h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      <button
        onClick={() => setNames([...names, "Charlie"])}
        className="bg-blue-500 w-20 h-20 ml-20 mt-20 rounded-xl"
      >
        Tambah Nama
      </button>
    </div>
  );
}
export default SimpleNameList;