import { useState } from "react";
import { products } from "./Product";
export default function ProductList() {
  const [cart, setCart] = useState(
    products.map((product) => ({ id: product.id, quantity: 0, totalPrice: 0 }))
  ); // Menyimpan informasi jumlah dan harga total per produk
  // Fungsi untuk menambah jumlah produk dan menghitung total harga
  const increment = (id) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + 1;
          return {
            ...item,
            quantity: newQuantity,
            totalPrice:
              newQuantity * products.find((prod) => prod.id === id).price,
          };
        }
        return item;
      });
    });
  };
  // Fungsi untuk mengurangi jumlah produk dan menghitung total harga
  const decrement = (id) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity > 0 ? item.quantity - 1 : 0;
          return {
            ...item,
            quantity: newQuantity,
            totalPrice:
              newQuantity * products.find((prod) => prod.id === id).price,
          };
        }
        return item;
      });
    });
  };
  // Menghitung total keseluruhan harga, hanya jika ada produk yang dipilih
  const totalPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => {
          const productInCart = cart.find((item) => item.id === product.id);
          return (
            <ProductCard
              key={product.id}
              product={product}
              quantity={productInCart.quantity}
              increment={() => increment(product.id)}
              decrement={() => decrement(product.id)}
              totalPrice={productInCart.totalPrice}
            />
          );
        })}
      </div>
      {/* Menampilkan rincian harga dan total keseluruhan */}
      <div className="mt-8 p-4 bg-gray-100 rounded-lg">
        <h3 className="text-xl font-semibold">Rincian Harga:</h3>
        {cart.map((item) => {
          if (item.quantity > 0) {
            const product = products.find((prod) => prod.id === item.id);
            return (
              <p key={item.id} className="text-lg">
                {product.title} x {item.quantity} = Rp{" "}
                {item.totalPrice.toLocaleString()}.000
              </p>
            );
          }
          return null;
        })}
        <hr className="my-4" />
        {/* Menampilkan total harga hanya jika ada produk yang dipilih */}
        {totalPrice > 0 ? (
          <p className="text-lg font-semibold">
            Total Harga: Rp {totalPrice.toLocaleString()}.000
          </p>
        ) : (
          <p className="text-lg font-semibold">Total Harga: Rp 0</p>
        )}
      </div>
    </div>
  );
}
function ProductCard({ product, quantity, increment, decrement, totalPrice }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover"
      />
      <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      <p className="text-gray-600">
        Harga barang: Rp {product.price.toLocaleString()}
      </p>
      {/* Tampilan jumlah produk */}
      <div className="flex  mt-4">
        <button
          onClick={decrement}
          className="bg-red-500 text-white p-2 rounded hover:bg-red-700 mr-2"
        >
          Kurang
        </button>
        <button
          onClick={increment}
          className="bg-green-500 text-white p-2 rounded hover:bg-green-700 mr-4"
        >
          Tambah
        </button>
        <span className="text-xl">{quantity}</span>
      </div>
      {/* Menampilkan total harga */}
      <p className="text-lg font-semibold mt-4">
        Total Harga:{" "}
        {totalPrice > 0 ? `Rp ${totalPrice.toLocaleString()}.000` : "Rp 0"}
      </p>
    </div>
  );
}