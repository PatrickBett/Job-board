import React from "react";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from "./Components/Protected";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="login" element={<Login />} />

          <Route path="register" element={<Register />} />
          <Route path="jobs" element={<Protected>{<Home />}</Protected>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
