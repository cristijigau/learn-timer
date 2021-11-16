import './App.css';
import Timer from './components/Timer';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Timer />
      </ThemeProvider>
    </div>
  );
}

export default App;
