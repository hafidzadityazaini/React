import { create } from "zustand";
const useStore = create((set) => ({
    count: 0,
    increment: () => set((state) => ({ count: state.count + 1 })), // Memperbarui state.count dengan penambahan 1
    decrement: () => set((state) => ({ count: state.count - 1 })), // Memperbarui state.count dengan pengurangan 1
}));
const Counter = () => {
    const { count, increment, decrement } = useStore(); // Menggunakan hook useStore
    return (
        <div>
            <h1 className="text-[30px] font-bold text-blue-500 mb-5 ml-7">{count}</h1>
            <button onClick={increment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Tambah</button>
            <button onClick={decrement} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Kurang</button>
        </div>
    );
};
export default Counter;