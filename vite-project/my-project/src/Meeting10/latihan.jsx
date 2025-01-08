// Tanpa Dependency 
import {useState, useEffect} from "react";
// export default function Counter () {
//     const [count, setCount] = useState(0)
//     useEffect(() => {
//         console.log(`Count Saat Ini  ${count}`);
        
// });     
//     return(
//         <div>
//             <p> Count : {count}</p>
//             <button onClick={( ) => setCount(count + 1)}>Tambah</button>
//         </div>
//     )
// }
// Dengan Dependency
export default function Withdependency () {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")
    useEffect(() => {
        console.log(`Count Berubah :  ${count}`);
        console.log(`text Berubah :  ${text}`);
    }, [count, text ]);
    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Tambah</button>
            <br />
            <input type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Masukkan Text"
            />
        </div>
    )
}