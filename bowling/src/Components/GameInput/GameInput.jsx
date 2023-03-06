import Container from '@mui/material/Container';
import {useState, useEffect} from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import usePlayerUpdate from '../../usePlayerUpdate';
import Button from '@mui/material/Button';


const GameInput = ({data,setData,i,team}) => {
    const [game1, setGame1] = useState('');
    const [game2, setGame2] = useState('');
    const [game3, setGame3] = useState('');
    const [addGame,updateAll,addPlayer,updateAverage] = usePlayerUpdate();

    const handleSumbit = () => {
        if (game1 != '') {addGame(setData,data,team,i,game1)}
        if (game2 != '') {addGame(setData,data,team,i,game2)}
        if (game3 != '') {addGame(setData,data,team,i,game3)}
        updateAverage(setData,data,team,i)
    }

    useEffect( ()=> {
        setGame1('');
        setGame2('');
        setGame3('');
    },[team])
    
    return ( 
        <Container maxWidth = {"sm"}>
            <Typography>{data.teams[team].players[i].name}</Typography>
            <FormControl>
                <TextField id="game1"  label = 'Game 1' variant="outlined" value = {game1} 
                    type = 'number'
                    onChange = {(e)=>{setGame1(e.target.value)}}/>
                <TextField id="game2"  label = 'Game 2' variant="outlined" value = {game2} 
                    type = 'number'
                    onChange = {(e)=>{setGame2(e.target.value)}}/>
                <TextField id="game3"  label = 'Game 3' variant="outlined" value = {game3} 
                    type = 'number'
                    onChange = {(e)=>{setGame3(e.target.value)}}/>
            </FormControl>

            <Button variant="outlined" onClick = {handleSumbit}>Add Games</Button>
        </Container>
     );
}
 
export default GameInput;