import {useState, useEffect} from 'react';
export default function Counter () {    
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`Efek Dijalankan `);
    })
    return(
        <div>
            <p> Count : {count}</p>
            <button onClick={( ) => setCount(count + 1)}>Tambah</button>
        </div>
    )
}