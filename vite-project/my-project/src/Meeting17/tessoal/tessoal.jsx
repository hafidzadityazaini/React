import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
    avatar: "https://robohash.org/123",
  });
  const [message, setMessage] = useState("");
  const handleCreateUser = async (e) => {
    e.preventDefault();
    const newUser = {
      ...formData,
      creationAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    try {
      const response = await axios.post(
        "https://api.escuelajs.co/api/v1/users",
        newUser
      );
      setMessage(`User Created: ${response.data.id}`);
      // Reset Form
      setFormData({
        name: "",
        email: "",
        password: "",
        role: "customer",
        avatar: "https://robohash.org/123",
      });
    } catch (error) {
      setMessage(`Error creating user: ${error.message}`);
    }
  };
  return (
    <div>
      <h2 className="bg-blue-500 w-40 ml-2 mt-2 mb-4">Create User</h2>
      <Link to="/" className="bg-red-300 w-1/2 mx-auto mb-2">
        Back to Login
      </Link>
      <form onSubmit={handleCreateUser}>
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
       
        <button type="submit">Create User</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
export default CreateUser;