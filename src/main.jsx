import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import '@theme-toggles/react/css/HalfSun.css'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
)
