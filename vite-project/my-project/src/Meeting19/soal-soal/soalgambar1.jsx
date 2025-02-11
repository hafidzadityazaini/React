import { create } from 'zustand';
// Membuat store Zustand
const useCustomerStore = create((set) => ({
  customerCount: 0,
  addCustomer: () => set((state) => ({ customerCount: state.customerCount + 1 })),
  removeCustomer: () => set((state) => ({ customerCount: Math.max(0, state.customerCount - 1) })),
}));
export default function CustomerCounter() {
  const { customerCount, addCustomer, removeCustomer } = useCustomerStore();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Jumlah Pelanggan: {customerCount}</h1>
      <div className="flex gap-4">
        <button onClick={addCustomer} className="px-4 py-2 bg-green-500 text-white rounded-lg">Tambah Pelanggan</button>
        <button onClick={removeCustomer} className="px-4 py-2 bg-red-500 text-white rounded-lg">Kurangi Pelanggan</button>
      </div>
    </div>
  );
}