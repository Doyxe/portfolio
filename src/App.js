// src/App.js
import React from "react";
import Sidebar from "./components/sidebar";
import Hero from "./pages/Hero";
import AboutMe from "./pages/AboutMe";
import Technologies from "./pages/Skills";
import Wido from "./components/WhatIDo";
import Projects from "./components/Projects";
import WorkProcess from "./components/WorkProcess";
import ContactFooter from "./components/ContactFotter";
import { SidebarProvider, useSidebar } from "./context/SidebarContext";
import "./App.css";

const MainContent = () => {
  const { isSidebarOpen } = useSidebar();

  return (
    <div
      className="main-content"
      style={{
        paddingLeft: isSidebarOpen ? "220px" : "60px",
        paddingRight: "2rem",
        paddingTop: "2rem",
        transition: "padding-left 0.3s ease",
      }}
    >
      <Hero />
      <AboutMe />     
      <Technologies />
      <Wido />
      <Projects />
      <WorkProcess />
      <ContactFooter />
    </div>
  );
};

function App() {
  return (
    <SidebarProvider>
      <div className="app-container">
        <Sidebar />
        <MainContent />
      </div>
    </SidebarProvider>
  );
}

export default App;
