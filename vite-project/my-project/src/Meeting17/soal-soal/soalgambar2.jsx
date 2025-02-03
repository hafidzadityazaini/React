import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
function Home() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">Product Management App</h1>
      <nav className="mt-4">
        <Link to="/create" className="mr-4 p-2 bg-blue-500 text-white rounded">Add Product</Link>
        <Link to="/products" className="p-2 bg-green-500 text-white rounded">View Products</Link>
      </nav>
    </div>
  );
}
function CreateProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const newProduct = { title, price, description };
    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));
    navigate("/products");
  };
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Product Title" value={title} onChange={(e) => setTitle(e.target.value)} className="block w-full p-2 border rounded" required />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="block w-full p-2 border rounded" required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="block w-full p-2 border rounded" required />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Submit</button>
      </form>
      <button onClick={() => navigate(-1)} className="mt-4 p-2 bg-gray-500 text-white rounded">Back</button>
    </div>
  );
}
function ProductList() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Product List</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">Title</th>
              <th className="border border-gray-300 p-2">Price</th>
              <th className="border border-gray-300 p-2">Description</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className="border border-gray-300 p-2">{product.title}</td>
                <td className="border border-gray-300 p-2">{product.price}</td>
                <td className="border border-gray-300 p-2">{product.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Link to="/" className="mt-4 block p-2 bg-gray-500 text-white rounded">Back to Home</Link>
    </div>
  );
}
function Plate() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </Router>
  );
}
export default Plate;