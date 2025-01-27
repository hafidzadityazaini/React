import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./input.css";
import CobaAxios from "./Meeting13/tessoal";
import Axios from "./Meeting13/soalgambar1";
import ProductList from "./Meeting9/soal-soal/soalgambar1,2,3";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductList/>
  </StrictMode>
);