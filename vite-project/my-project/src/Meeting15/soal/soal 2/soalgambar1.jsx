import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import './App.css'; // Impor file CSS
// ✅ Halaman Login
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://fakestoreapi.com/auth/login", {
                username,
                password,
            });
            const token = response.data.token;
            localStorage.setItem("token", token); // Simpan token di localStorage
            navigate("/products"); // Arahkan ke halaman produk
        } catch (err) {
            setError("Login gagal. Periksa kembali username dan password.");
        }
    };
    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            {error && <p className="error-message">{error}</p>}
            <form className="login-form" onSubmit={handleLogin}>
                <input
                    type="text"
                    className="input-field"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    className="input-field"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="btn-submit">Login</button>
            </form>
        </div>
    );
};
// ✅ Halaman Produk
const Products = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            alert("Akses Ditolak: Silakan Login Terlebih Dahulu");
            navigate("/login");
            return;
        }
        axios
            .get("https://fakestoreapi.com/products", {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => setProducts(response.data))
            .catch(() => {
                setError("Token Tidak Valid, Silakan Login Ulang");
                localStorage.removeItem("token"); // Hapus token jika tidak valid
                navigate("/login");
            });
    }, [navigate]);
    // ✅ Fungsi Logout
    const handleLogout = () => {
        localStorage.removeItem("token"); // Hapus token
        navigate("/login"); // Redirect ke login
    };
    return (
        <div className="products-container">
            <h2 className="products-title">Daftar Produk</h2>
            <button className="btn-logout" onClick={handleLogout}>
                Logout
            </button>
            {error && <p className="error-message">{error}</p>}
            <table className="products-table">
                <thead>
                    <tr>
                        <th>ID Produk</th>
                        <th>Nama Produk</th>
                        <th>Harga</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>${product.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
// ✅ Routing Utama
const Crudd = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/products" element={<Products />} />
                <Route path="*" element={<Login />} /> {/* Redirect default ke login */}
            </Routes>
        </Router>
    );
};
export default Crudd;