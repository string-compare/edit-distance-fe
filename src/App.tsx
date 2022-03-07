import "./App.css";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Footer } from "./components/footer/Footer";
import { useThemeProvider } from "./theme/context-provider";
import { EditDistanceProvider } from "./editDistance/context-provider";

function App() {
  const [_, { mode }] = useThemeProvider();

  return (
    <div className={mode}>
      <Header />
      <Main />
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;
