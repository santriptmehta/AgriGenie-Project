import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BrainAnimation from './utils/BrainAnimation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <BrainAnimation/>
  </StrictMode>,
)
