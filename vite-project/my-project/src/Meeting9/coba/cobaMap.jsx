import { useState } from "react";
function UpdateStateWithMap() {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", Active: false },
    { id: 2, name: "Bob", Active: false },
    { id: 3, name: "Charlie", Active: false },
  ]);
  const ToggleActive = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, Active: !user.Active } : user
      )
    );
  };
  return (
    <div>
      <h2>Daftar Pengguna</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            <span>
              {user.name} - {user.Active ? "Aktif" : "Tidak Aktif"}
            </span>
            <button
              className="ml-4 bg-blue-500 w-20 h-20 mt-20 rounded-xl"
              onClick={() => ToggleActive(user.id)}
            >
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default UpdateStateWithMap;