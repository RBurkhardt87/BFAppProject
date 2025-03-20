import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import './styling/Layout.css';

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SleepLog from "./pages/SleepLog";
import DiaperLog from "./pages/DiaperLog";
import FeedingLog from "./pages/FeedingLog";
import PumpingLog from "./pages/PumpingLog";
import BottleFeedingLog from "./pages/BottleFeedingLog";
import Nutrition from "./pages/Nutrition";
import Resources from "./pages/Resources";
import Navbar from "./components/Navigation/Navbar";
import Header from "./components/Page Layout/Header";
import Footer from "./components/Page Layout/Footer";

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
    "/nursing-log": "Nursing Log",
    "/pumping-log": "Pumping Log",
    "/bottle-feeding-log": "Bottle Feeding Log",
    "/nutrition": "Nutrition",
    "/resources": "Resources",
  };

  const currentPage = pageTitles[location.pathname] || "Page";

  return (
    <div className="main-background">
    <div className="layout-container"> 
      <header>
        <h1>Breastfeeding Application</h1>
      </header>

      <Navbar />
      <Header pageName={currentPage} />

      <main className="content">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sleep-log" element={<SleepLog />} />
          <Route path="/diaper-log" element={<DiaperLog />} />
          <Route path="/nursing-log" element={<FeedingLog />} />
          <Route path="pumping-log" element={<PumpingLog />} />
          <Route path="bottle-feeding-log" element={<BottleFeedingLog />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </main>

      <hr />
      <Footer />
    </div>
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
