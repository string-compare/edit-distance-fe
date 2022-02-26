import React from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Footer } from "./components/footer/Footer";
import { useThemeProvider } from "./theme/context-provider";

function App() {
  const [trigger, { mode, style }] = useThemeProvider();

  return (
    <div className="app" style={style}>
      <Header />
      <Main />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
