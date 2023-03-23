import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import First from './First'
import Second from './Second'
import Third from './Third'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<First/>} />
      <Route path="/second" element={<Second/>} />
      <Route path="/third" element={<Third/>} />
    </Routes>
   </BrowserRouter>,
)
