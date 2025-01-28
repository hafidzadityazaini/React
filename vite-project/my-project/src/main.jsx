import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./input.css";
import Axioshop from "./Meeting14/soal-soal/soalgambar2";
import SimpleUserForm from "./Meeting15/Tes soal/tessoal";
import InputForm from "./Meeting15/soal/soal 1/soalgambar1";
import Crudd from "./Meeting15/soal/soal 2/soalgambar1";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Axioshop />
    <Crudd />
  </StrictMode>
);