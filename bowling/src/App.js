
import {useState} from 'react';
import './App.css';
import TeamTable from './Components/TeamTable/TeamTable';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import * as teams from "./data.json";
import usePlayerUpdate from './usePlayerUpdate';
import { containerClasses } from '@mui/material';

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

  const handleModal = () => {
      if (modal === false) {
        setmodal(true);
      }
      else {
        setmodal(false);
      }
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <ThemeProvider theme = {darkTheme}>
        <TeamTable team = {data.teams[0]}></TeamTable>
        <TeamTable team = {data.teams[1]}></TeamTable>
        <button onClick={addgame}>Add Game</button>
        <button onClick={updateData}>Update</button>
        <button onClick={addnewPlayer}>Add Tim</button>
        <button onClick={handleModal}>Modal</button>
      <Modal
       open={modal}
       onClose={handleModal}
       >
       <Box sx={style}>
          <Typography  variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography  sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
     </Modal>
      </ThemeProvider>
    </>
    
  );
}

export default App;
