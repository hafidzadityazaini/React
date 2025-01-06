import { useState } from "react";
function Loginstatus() {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("Adit");
  function handleLogin() {
    setIsLogin(true);
    setUsername("Adit");
  }
  function handleLogout() {
    setIsLogin(false);
    setUsername("Adit");
  }
  return (
    <div>
      {isLogin ? (
        <div className="bg-gray-200 p-4">
          <p className="text-green-500 font-bold text-lg mb-4">
            Selamat datang, {username}!
          </p>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="bg-gray-200 p-4">
          <p className=" font-bold text-lg mb-4">Anda belum login.</p>
          <button
            onClick={handleLogin}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}
export default Loginstatus;