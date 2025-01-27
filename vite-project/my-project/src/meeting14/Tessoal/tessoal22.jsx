import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostDetail from "./tessoal2";

function Home() {
    return (
        <div>
            <h1>Halaman Utama</h1>
            <p>Pilih postingan:</p>
            <ul>
                <li><a href="/posts/1">Post 1</a></li>
                <li><a href="/posts/2">Post 2</a></li>
                <li><a href="/posts/3">Post 3</a></li>
            </ul>
        </div>
    );
}

function Apt() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/posts/:id" element={<PostDetail />} />
            </Routes>
        </Router>
    );
}

export default Apt;