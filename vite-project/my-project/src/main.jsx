import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Meeting2/App.jsx'
import Adit from './Meeting3/App.jsx'
import Pages from './Meeting4/pages/pages.jsx'
import Example from './Meeting8/Tes soal/tessoal.jsx'
import Loginstatus from './Meeting8/Soal-soal/soalgambar2.jsx'
import Calculator from './Meeting8/Soal-soal/soalgambar3.jsx'
import SimpleNameList from "./Meeting9/coba/cobaArray.jsx";
import UpdateStateWithMap from "./Meeting9/coba/cobaMap.jsx";
import Produk from "./Meeting9/praktek/soal1.jsx";
import Soal1 from "./Meeting10/soal1.jsx";
import CounterLogger from "./Meeting10/soal2.jsx";
import TextLogger from "./Meeting10/soal3.jsx";
import UseOnlineStatus from "./Meeting11/coba/cobachooks1.jsx";
import { StatusBar } from "./Meeting11/coba/cobachooks2.jsx";
import { GantiTema } from "./Meeting11/praktek/soal1.jsx";
import { CekTask } from "./Meeting11/praktek/soal2.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TextLogger />
    <CekTask />
  </StrictMode>
);