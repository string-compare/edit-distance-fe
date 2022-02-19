import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
