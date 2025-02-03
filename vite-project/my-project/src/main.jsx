import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./input.css";
import Plate from "./Meeting17/soal-soal/soalgambar2";
import Applikasi from "./Meeting17/soal-soal/soalgambar1";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Applikasi />
  </StrictMode>
);