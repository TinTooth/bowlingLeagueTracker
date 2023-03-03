import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import TeamTable from './Components/TeamTable/TeamTable';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as teams from "./data.json";
import usePlayerUpdate from './usePlayerUpdate';

function App() {
  const [data, setdata] = useState(teams);
  const [addGame] = usePlayerUpdate()

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#350c0c'
      }
    },
  });

  const addgame = () => {
    console.log(data)
    addGame(setdata,data,0,202);
  }


  return (
      <ThemeProvider theme = {darkTheme}>
        <TeamTable team = {data.teams[0]}></TeamTable>
        <TeamTable team = {data.teams[1]}></TeamTable>
        <button onClick={addgame}>Add Game</button>
      </ThemeProvider>
    
  
  );
}

export default App;
