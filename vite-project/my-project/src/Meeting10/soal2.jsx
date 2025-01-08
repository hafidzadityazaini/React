import {useState, useEffect} from 'react';
export default function CountLogger () {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`Count berubah Menjadi ${count}`);
    }, [count])
    return(
        <div>
            <p>Count Saat Ini {count}</p>
            <button onClick={() => setCount(count + 1)}>Tambah</button>
        </div>
    )
}