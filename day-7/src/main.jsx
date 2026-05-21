import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Counter from './Counter.jsx'
import Color from './Color.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Counter/>
    <Color/>
  </StrictMode>,
)
