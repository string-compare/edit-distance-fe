import "./App.css";
import { AppLayout } from "./components/layouts";
import { useThemeProvider } from "./theme/context-provider";

function App() {
  const [_, { mode }] = useThemeProvider();

  return <AppLayout />;
}

export default App;
