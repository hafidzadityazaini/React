import { useState, useEffect } from "react";
function TextLogger() {
  const [text, setText] = useState("");
  useEffect(() => {
    console.log(`Text berubah menjadi ${text}`);
  }, [text]);
  return (
    <div>
      <p>{text}</p>
      <input
        placeholder="Masukkan teks"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => setText("")}>Hapus Teks</button>
    </div>
  );
}
export default TextLogger;