import React, { useState } from "react";
import "./App.css";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from "./Components/Protected";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { ACCESS_TOKEN } from "./constants";
// import { useNavigate } from "react-router-dom";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);

    // navigate("/login");
  };

  return (
    <>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />

          <Route
            path="register"
            element={<Register setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="jobs" element={<Protected>{<Home />}</Protected>} />
          <Route path="logout" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
