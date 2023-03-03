import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import TeamTable from './Components/TeamTable/TeamTable';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import * as teams from "./data.json";
import usePlayerUpdate from './usePlayerUpdate';
import { containerClasses } from '@mui/material';

function App() {
  const [data, setdata] = useState(teams);
  const [addGame,updateAll,addPlayer] = usePlayerUpdate()

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#350c0c'
      }
    },
  });

  const addgame = () => {
    console.log(data)
    addGame(setdata,data,0,0,202);
  }

  const updateData = () => {
    updateAll(setdata,data,0,1)
  }

  const addnewPlayer = () => {
    addPlayer(setdata,data,0,"Tim")
  }

  return (
      <ThemeProvider theme = {darkTheme}>
        <TeamTable team = {data.teams[0]}></TeamTable>
        <TeamTable team = {data.teams[1]}></TeamTable>
        <button onClick={addgame}>Add Game</button>
        <button onClick={updateData}>Update</button>
        <button onClick={addnewPlayer}>Add Tim</button>
      </ThemeProvider>
    
  );
}

export default App;
