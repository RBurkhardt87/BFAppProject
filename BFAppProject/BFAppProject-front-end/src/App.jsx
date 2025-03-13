import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './styling/Header.css';

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SleepLog from "./pages/SleepLog";
import DiaperLog from "./pages/DiaperLog";
import FeedingLog from "./pages/FeedingLog";
import Nutrition from "./pages/Nutrition";
import Resources from "./pages/Resources";
import Navbar from "./components/Navigation/Navbar";
import Header from "./components/Header";

function MainLayout() {
  const location = useLocation(); 

  const pageTitles = {
    "/": "Home",
    "/home": "Home",
    "/about": "About",
    "/contact": "Contact",
    "/login": "Login",
    "/register": "Registration",
    "/sleep-log": "Sleep Log",
    "/diaper-log": "Diaper Log",
    "/feeding-log": "Feeding Log",
    "/nutrition": "Nutrition",
    "/resources": "Resources",
  };

  const currentPage = pageTitles[location.pathname] || "Page";

  return (
    <div>
      <header>
        <h1>Breastfeeding Application</h1>
      </header>

      <Navbar />
      <Header pageName={currentPage} />

      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sleep-log" element={<SleepLog />} />
        <Route path="/diaper-log" element={<DiaperLog />} />
        <Route path="/feeding-log" element={<FeedingLog />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

export default App;
