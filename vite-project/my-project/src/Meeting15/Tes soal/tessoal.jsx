import { useState } from "react";
import axios from "axios";
const SimpleUserForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios
            .post("https://jsonplaceholder.typicode.com/users", {
                name,
                email,
            })
            .then((response) => {
                setResponse(response.data);
                setError(null);
            })
            .catch((error) => {
                setError(error.response.data);
                setResponse(null);
            });
    };
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Simple User Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full p-2 border rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full p-2 border rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                >
                    Submit
                </button>
            </form>
            {response && (
                <div className="mt-4">
                    <h2 className="text-lg font-bold">Response:</h2>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
            {error && (
                <div className="mt-4">
                    <h2 className="text-lg font-bold">Error:</h2>
                    <pre>{JSON.stringify(error, null, 2)}</pre>
                </div>
            )}
        </div>
    );  
};
export default SimpleUserForm;