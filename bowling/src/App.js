
import {useState} from 'react';
import './App.css';
import TeamTable from './Components/TeamTable/TeamTable';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import * as teams from "./data.json";
import usePlayerUpdate from './usePlayerUpdate';
import AddGames from './Components/AddGames/AddGames';
import Grid from '@mui/material/Unstable_Grid2';

function App() {
  const [data, setdata] = useState(teams);
  const [modal,setmodal] = useState(false);
  const [addGame,updateAll,addPlayer] = usePlayerUpdate();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#350c0c'
      }
    },
  });

  const handleModal = () => {
      if (modal === false) {
        setmodal(true);
      }
      else {
        setmodal(false);
      }
  }
  
  return (
    <>
      <ThemeProvider theme = {darkTheme}>
      <Grid display="flex"
    justifyContent="center"
    alignItems="center" container rowSpacing={1} columnSpacing={{ xs: 5, sm: 1, md: 1 }}>
        {data.teams.map((team,i)=>{
          return (<Grid xs={4} sm={1} md={9} key={i}>
            <TeamTable team = {data.teams[i]}></TeamTable>
        </Grid>)
        })}
      </Grid>
        <button onClick={handleModal}>Add Games</button>
      <Modal
       open={modal}
       onClose={handleModal}
       >
       <AddGames data = {data} setData ={setdata}></AddGames>
     </Modal>
      </ThemeProvider>
    </>
    
  );
}

export default App;
