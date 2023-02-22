import logo from './logo.svg';
import './App.css';
import TeamTable from './Components/TeamTable/TeamTable';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#350c0c'
      }
    },
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ThemeProvider theme = {darkTheme}>
        <TeamTable></TeamTable>
      </ThemeProvider>
    </div>
  );
}

export default App;
