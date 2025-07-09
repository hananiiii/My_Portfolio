import React from "react";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home.jsx";
import './App.css'

function App() {

  return (
    <React.StrictMode>
    <BrowserRouter>
      <div className="App">
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
           
           
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
  )
}

export default App
