import axios from "axios";
import { useState } from "react";
const InputForm = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios
            .post("https://fakestoreapi.com/auth/login", { // URL API yang benar
                username: name, // Sesuaikan dengan format API
                password,
            })
            .then((res) => {
                setResponse(res.data);
                setError(null);
            })
            .catch((err) => {
                setError(err.response?.data || "Terjadi kesalahan");
                setResponse(null);
            });
    };
    return (
        <div>
            <h1>Input Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {response && (
                <div>
                    <h2>Response:</h2>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
            {error && (
                <div>
                    <h2>Error:</h2>
                    <pre>{JSON.stringify(error, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};
export default InputForm;