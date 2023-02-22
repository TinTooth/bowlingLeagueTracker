import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';
import * as teams from "../../data.json";


const StyledTableCell = styled(TableCell)(({theme}) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));


const TeamTable = () => {

    let data = teams;

    const getTotal = (games) => {
      let result = 0;
      games.map((game) => {
        result += game;
      })
      return result ;
    }

    return ( 
        <>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size = 'small' aria-label="a dense table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Player</StyledTableCell>
              <StyledTableCell align="left">Average</StyledTableCell>
              <StyledTableCell align="right">Handicap</StyledTableCell>
              <StyledTableCell align="center">Games</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.teams.players.map((player,i) => (
              <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <StyledTableCell align="left">{player.name}</StyledTableCell>
                <StyledTableCell align="left">{player.average}</StyledTableCell>
                <StyledTableCell align="right">{player.handicap}</StyledTableCell>
                <StyledTableCell align="center">{player.games.map((game)=>{
                  return `${game}, `;
                })}</StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

            </>
     );
}
 
export default TeamTable;