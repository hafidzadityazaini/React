import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function BookList() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=react")
      .then((response) => {
        setBooks(response.data.items || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Gagal memuat data buku. Coba lagi nanti.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading data buku...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Daftar Buku</h1>
      <div>
        {books.map((book) => {
          const { id, volumeInfo } = book;
          const { title, authors, publishedDate, imageLinks } = volumeInfo;
          const thumbnail = imageLinks?.thumbnail || "https://via.placeholder.com/128x193?text=No+Image";

          return (
            <div key={id}>
              <img src={thumbnail} alt={title} />
              <h3>{title}</h3>
              <p>{authors ? authors.join(", ") : "Penulis tidak tersedia"}</p>
              <p>{publishedDate || "Tanggal tidak tersedia"}</p>
              <Link to={`/book/${id}`} className="text-blue-500 underline">Lihat Detail</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Gagal memuat detail buku. Coba lagi nanti.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading detail buku...</p>;
  if (error) return <p>{error}</p>;
  if (!book) return <p>Data buku tidak ditemukan.</p>;

  const { volumeInfo } = book;
  const { title, authors, publishedDate, description, imageLinks } = volumeInfo;
  const thumbnail = imageLinks?.thumbnail || "https://via.placeholder.com/128x193?text=No+Image";

  return (
    <div>
      <h1>{title}</h1>
      <img src={thumbnail} alt={title} />
      <p>{authors ? authors.join(", ") : "Penulis tidak tersedia"}</p>
      <p>{publishedDate || "Tanggal tidak tersedia"}</p>
      <p>{description || "Deskripsi tidak tersedia"}</p>
      <Link to="/" className="text-blue-500 underline">Kembali ke daftar</Link>
    </div>
  );
}

function Apatuh() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetail />} />
      </Routes>
    </Router>
  );
}

export default Apatuh;