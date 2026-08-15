import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// These two stylesheets define utility/layout classes (e.g. .page-bg,
// .main-white-container, .card) that other pages rely on globally. They used
// to be pulled in as a side-effect of routing the Home/Events pages; import
// them here so the styles stay globally available regardless of routing.
import './pages/home.css'
import './pages/events.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
