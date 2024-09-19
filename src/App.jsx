import React from "react";
import Home from "./Home.jsx";
import Flash from "./Pages/Flash.jsx";
import Stake from "./Pages/Stake.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./css/stake2.css";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="Flash" element={<Flash />}></Route>
        </Routes>
        <Routes>
          <Route path="Stake" element={<Stake />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
