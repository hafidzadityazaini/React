import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductAxios() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null); // Untuk modal detail produk

    // Fetch data produk dari API
    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => {
                setProducts(response.data);
                setCart(response.data.map((product) => ({
                    id: product.id,
                    quantity: 0,
                    totalPrice: 0,
                })));
            })
            .catch((error) => {
                console.error("Error fetching product data:", error);
            });
    }, []);

    // Fungsi untuk menambah jumlah produk dan menghitung total harga
    const increment = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * products.find((prod) => prod.id === id).price }
                    : item
            )
        );
    };

    // Fungsi untuk mengurangi jumlah produk dan menghitung total harga
    const decrement = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0, totalPrice: (item.quantity > 0 ? item.quantity - 1 : 0) * products.find((prod) => prod.id === id).price }
                    : item
            )
        );
    };

    // Menghitung total keseluruhan harga
    const totalPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4 text-center  bg-slate-600 h-20 pt-[19px]">Daftar Produk</h2>
            {products.length > 0 ? (
                <div className="grid grid-cols-3 gap-4">
                    {products.map((product) => {
                        const productInCart = cart.find((item) => item.id === product.id);
                        return (
                            <ProductCard
                                key={product.id}
                                product={product}
                                quantity={productInCart?.quantity || 0}
                                increment={() => increment(product.id)}
                                decrement={() => decrement(product.id)}
                                totalPrice={productInCart?.totalPrice || 0}
                                onClick={() => setSelectedProduct(product)} // Buka modal detail
                            />
                        );
                    })}
                </div>
            ) : (
                <p>Memuat data produk...</p>
            )}

            {/* Menampilkan rincian harga dan total keseluruhan */}
            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
                <h3 className="text-xl font-semibold">Rincian Harga:</h3>
                {cart.map((item) =>
                    item.quantity > 0 ? (
                        <p key={item.id} className="text-lg">
                            {products.find((prod) => prod.id === item.id).title} x {item.quantity} = ${item.totalPrice.toFixed(2)}
                        </p>
                    ) : null
                )}
                <hr className="my-4" />
                <p className="text-lg font-semibold ">
                    Total Harga: ${totalPrice.toFixed(2)}
                </p>
            </div>

            {/* Modal Detail Produk */}
            {selectedProduct && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                        <h2 className="text-xl font-bold">{selectedProduct.title}</h2>
                        <img src={selectedProduct.image} alt={selectedProduct.title} className="w-full h-48 object-cover my-4" />
                        <p className="text-gray-700">{selectedProduct.description}</p>
                        <p className="text-lg font-semibold mt-4">Harga: ${selectedProduct.price.toFixed(2)}</p>
                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                        >
                            Tutup
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

function ProductCard({ product, quantity, increment, decrement, totalPrice, onClick }) {
    return (
        <div
            className="bg-white p-4 rounded-lg shadow-md transition-transform duration-200 hover:shadow-xl hover:scale-105 cursor-pointer"
            onClick={onClick}
        >
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-600">Harga barang: ${product.price.toFixed(2)}</p>

            {/* Tombol tambah/kurang */}
            <div className="flex mt-4">
                <button onClick={(e) => { e.stopPropagation(); decrement(); }} className="bg-red-500 text-white p-2 rounded hover:bg-red-700 mr-2">
                    Kurang
                </button>
                <span className="text-xl mr-3 ml-1 mt-[5px]">{quantity}</span>
                <button onClick={(e) => { e.stopPropagation(); increment(); }} className="bg-green-500 text-white p-2 rounded hover:bg-green-700 mr-4">
                    Tambah
                </button>
            </div>

            {/* Menampilkan total harga */}
            <p className="text-lg font-semibold mt-10">Total Harga: {totalPrice > 0 ? `$${totalPrice.toFixed(2)}` : "$0.00"}</p>
        </div>
    );
}