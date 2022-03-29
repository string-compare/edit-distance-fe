import "./App.css";
import EditDistance from "./components/EditDistance/EditDistance";
import { AppLayout } from "./components/layouts";
import { useThemeProvider } from "./theme/context-provider";

function App() {
  const [_, { mode }] = useThemeProvider();

  return (
    <AppLayout>
      <EditDistance />
    </AppLayout>
  );
}

export default App;
