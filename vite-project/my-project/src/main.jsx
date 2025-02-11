import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./input.css";
import Counter from "./Meeting19/tes soal/tessoal";
import CustomerCounter from "./Meeting19/soal-soal/soalgambar1";
import TodoApp from "./Meeting19/soal-soal/soalgambar2";

createRoot(document.getElementById("root")).render(
  <StrictMode>
 <TodoApp/>
  </StrictMode>
);