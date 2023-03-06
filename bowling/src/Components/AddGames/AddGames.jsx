import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import {useState} from 'react';
import GameInput from '../GameInput/GameInput';

const AddGames = ({data,setData}) => {
    const [team, setteam] = useState(0);
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
    
    return data ? (
        <Box sx={style}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Team</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={[team]}
          label="Team"
          onChange={(e)=>{setteam(e.target.value)}}
        >
            {data.teams.map((team,i)=>{
                return (<MenuItem key = {i} value={team.teamId}>{team.name}</MenuItem>)
            })}
        </Select>
        {data.teams[team].players.map((player,i)=> {
            return <GameInput i = {i} team = {team} data = {data} setData = {setData}></GameInput>
        })}
      </FormControl>
          
        </Box>

      ):null;
}
 
export default AddGames;