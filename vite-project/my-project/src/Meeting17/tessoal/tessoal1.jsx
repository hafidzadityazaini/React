import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateUser from "./tessoal";
import Home from "../tessoal2"; // Buat file Home.jsx untuk halaman utama
function Apppp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<CreateUser />} />
      </Routes>
    </Router>
  );
}
export default Apppp;