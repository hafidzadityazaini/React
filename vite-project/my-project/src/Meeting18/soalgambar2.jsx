import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
function Home() {
  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">Product Management App</h1>
      <nav className="mt-4">
        <Link to="/create" className="mr-4 p-2 bg-blue-500 text-white rounded">
          Add Product
        </Link>
        <Link to="/products" className="p-2 bg-green-500 text-white rounded">
          View Products
        </Link>
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
    const newProduct = { id: Date.now(), title, price, description };
    products.push(newProduct);
    localStorage.setItem("products", JSON.stringify(products));
    navigate("/products");
  };
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="block w-full p-2 border rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="block w-full p-2 border rounded"
          required
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 p-2 bg-gray-500 text-white rounded"
      >
        Back
      </button>
    </div>
  );
}
function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("products")) || [];
    setProducts(storedProducts);
  }, []);
  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setProducts(updatedProducts);
  };
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
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="border border-gray-300 p-2">{product.title}</td>
                <td className="border border-gray-300 p-2">{product.price}</td>
                <td className="border border-gray-300 p-2">
                  {product.description}
                </td>
                <td className="border border-gray-300 p-2">
                  <button
                    onClick={() => navigate(`/update/${product.id}`)}
                    className="p-1 bg-yellow-500 text-white rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="ml-2 p-1 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Link to="/" className="mt-4 block p-2 bg-gray-500 text-white rounded">
        Back to Home
      </Link>
    </div>
  );
}
function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
  });
  useEffect(() => {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const foundProduct = products.find((p) => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate("/");
    }
  }, [id, navigate]);
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const products = JSON.parse(localStorage.getItem("products")) || [];
    const updatedProducts = products.map((p) =>
      p.id === parseInt(id) ? product : p
    );
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    navigate("/products");
  };
  return (
    <div>
      <h2 className="ml-2 mt-3">Update Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleChange}
          required
          className="block w-96 p-2 border rounded mb-2 border-black mt-2 ml-2"
        />
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
          className="block w-96 p-2 border rounded mb-2 border-black ml-2"
        />
        <input
          type="text"
          name="description"
          value={product.description}
          onChange={handleChange}
          required
          className="block w-96 p-2 border rounded border-black ml-2 "
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded mt-3 ml-2">Update</button>
      </form>
    </div>
  );
}
function Plate2() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateProduct />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/update/:id" element={<UpdateProduct />} />
      </Routes>
    </Router>
  );
}
export default Plate2;