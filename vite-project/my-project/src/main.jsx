import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Meeting2/App.jsx'
import Adit from './Meeting3/App.jsx'
import Pages from './Meeting4/pages/pages.jsx'
import Example from './Meeting8/Tes soal/tessoal.jsx'
import Loginstatus from './Meeting8/Soal-soal/soalgambar2.jsx'
import Calculator from './Meeting8/Soal-soal/soalgambar3.jsx'
Calculator
Loginstatus
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Calculator/>
  </StrictMode>,
)