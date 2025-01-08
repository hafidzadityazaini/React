import {useState, useEffect} from 'react';
export default function TextLogger () {
    const [text, setText] = useState("")
    const [updateText, setUpdateText] = useState("")
    const UpdateText = () => {
        setUpdateText(text);
    }
    useEffect(() => {
        console.log(`Text berubah Menjadi ${text}`);
    }, [text])
    return(
        <div>
            <p className='text-center border m-4'>Text Saat Ini : {updateText}</p>
            <input type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Masukkan Text" 
            className='border m-4 rounded-md text-center'></input>
            <button onClick={UpdateText} className='border m-4 bg-blue-500 rounded-lg p-2'>Update text</button>
        </div>
    )
}