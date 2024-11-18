import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Meeting2/App.jsx'
import Adit from './Meeting3/App.jsx'
import Pages from './Meeting4/pages/pages.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Pages />
  </StrictMode>,
)