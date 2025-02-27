import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our App</h1>
      <p className="text-lg text-gray-700 mb-6">Manage your users easily.</p>
      <Link to="/create-user" className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
        Create New User
      </Link>
    </div>
  );
};
export default Home;