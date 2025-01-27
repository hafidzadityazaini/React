import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function AxiosStore() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const updateCart = (id, title, price, change) => {
    setCart((prevCart) => {
      const currentQuantity = prevCart[id]?.quantity || 0;
      const newQuantity = currentQuantity + change;

      if (newQuantity <= 0) {
        const { [id]: _, ...rest } = prevCart;
        return rest;
      }

      return {
        ...prevCart,
        [id]: { title, price, quantity: newQuantity },
      };
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ShoppingCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            src={product.image}
            description={product.description}
            quantity={cart[product.id]?.quantity || 0}
            onUpdate={updateCart}
          />
        ))}
      </div>
    </div>
  );
}

function ShoppingCard({ id, title, price, src, quantity, onUpdate }) {
  return (
    <div className="border rounded-lg shadow-lg p-4 w-full flex flex-col transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100">
      <Link to={`/${id}`} className="text-inherit no-underline">
        <img src={src} alt={title} className="w-full h-60 object-contain rounded-t-lg" />
        <div className="py-2 flex-grow">
          <h2 className="text-md font-semibold">{title}</h2>
          <p className="text-gray-700">Harga: Rp.{price}</p>
          <p className="text-gray-700">Quantity: {quantity}</p>
          <p className="text-gray-700">Total: Rp.{quantity * price}</p>
        </div>
      </Link>
      <div className="flex justify-between mt-2">
        <button className="bg-blue-500 text-white w-1/3 py-2 rounded-md" onClick={() => onUpdate(id, title, price, 1)}>Tambah</button>
        <button className="bg-red-500 text-white w-1/3 py-2 rounded-md" onClick={() => onUpdate(id, title, price, -1)}>Kurang</button>
      </div>
    </div>
  );
}

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fetching product detail:", error));
  }, [id]);

  if (!product) {
    return <p className="text-center text-gray-500 mt-4">Loading product details...</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 flex flex-col lg:flex-row items-center lg:items-start lg:gap-8 bg-gray-50 rounded-lg shadow-md max-w-5xl mx-auto">
        <div className="w-full lg:w-1/3">
          <img src={product.image} alt={product.title} className="w-full h-auto object-contain rounded-lg shadow-sm" />
        </div>
        <div className="w-full lg:w-2/3">
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-700 text-lg mb-4">Rp. {product.price}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-gray-500 mb-4">Category: {product.category}</p>
          <div className="flex gap-4">
            <button onClick={() => navigate("/")} className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300">Back to Home</button>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">Add to Bag</button>
          </div>
          <p className="text-gray-500 mt-6 text-sm">Free shipping on all continental US orders.</p>
        </div>
      </div>
    </div>
  );
}