import React, { useState } from "react";
import { products } from "./product/Product";
function ShoppingCard({ title, price, src, quantity, onUpdate }) {
  const increment = () => {
    onUpdate(title, price, 1);
  };
  const decrement = () => {
    if (title === "Produk C" && quantity <= 0) {
      return;
    }
    if (quantity > 0) {
      onUpdate(title, price, -1);
    }
  };
  return (
    <div className="border rounded-lg shadow-lg p-4">
      <img
        src={src}
        alt={title}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <div className="py-2">
        <h2 className="text-md font-semibold">{title}</h2>
        <p className="text-gray-700">Harga: Rp.{price}</p>
        <p className="text-gray-700">Quantity: {quantity}</p>
        <p className="text-gray-700">Total: Rp.{quantity * price}</p>
      </div>
      <div className="flex justify-between mt-2">
        <button
          className="bg-blue-500 text-white w-1/3 py-2 rounded-md"
          onClick={increment}
        >
          Tambah
        </button>
        <button
          className="bg-red-500 text-white w-1/3 py-2 rounded-md"
          onClick={decrement}
        >
          Kurang
        </button>
      </div>
    </div>
  );
}
export default function Produk() {
  const [totalHarga, setTotalHarga] = useState(0);
  const [rincian, setRincian] = useState({});
  const handleUpdate = (title, price, quantityChange) => {
    setTotalHarga((prevTotal) => prevTotal + price * quantityChange);
    setRincian((prevRincian) => {
      const prevData = prevRincian[title] || { quantity: 0, total: 0 };
      const newQuantity = prevData.quantity + quantityChange;
      return {
        ...prevRincian,
        [title]: {
          quantity: newQuantity > 0 ? newQuantity : 0,
          total: newQuantity > 0 ? newQuantity * price : 0,
        },
      };
    });
  };
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ShoppingCard
            key={product.id}
            title={product.title}
            price={product.price}
            src={product.image}
            quantity={rincian[product.title]?.quantity || 0}
            onUpdate={handleUpdate}
          />
        ))}
      </div>
      <div className="mt-6 border-t pt-4">
        <h2 className="text-xl font-semibold">Rincian Harga:</h2>
        <ul className="list-disc list-inside">
          {products.map((product) => (
            <li key={product.id} className="text-gray-700">
              {product.title} x {rincian[product.title]?.quantity || 0} = Rp.
              {rincian[product.title]?.total || 0}
            </li>
          ))}
        </ul>
        <p className="text-lg font-bold mt-4">Total Harga: Rp.{totalHarga}</p>
      </div>
    </>
  );
}