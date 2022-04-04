import './App.css';
import EditDistanceProvider from './components/context/EditDistanceProvider';
import EditDistance from './components/EditDistance/EditDistance';
import { AppLayout } from './components/layouts';
import { useThemeProvider } from './theme/context-provider';

function App() {
  const [_, { mode }] = useThemeProvider();

  return (
    <AppLayout>
      <EditDistanceProvider>
        <EditDistance />
      </EditDistanceProvider>
    </AppLayout>
  );
}

export default App;
