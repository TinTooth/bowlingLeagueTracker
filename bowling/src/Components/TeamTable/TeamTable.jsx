import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import * as teams from "../../data.json";

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
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Player</TableCell>
              <TableCell align="left">Average</TableCell>
              <TableCell align="right">Handicap</TableCell>
              <TableCell align="center">Games</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.teams.players.map((player,i) => (
              <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{player.name}</TableCell>
                <TableCell align="left">{player.average}</TableCell>
                <TableCell align="right">{player.handicap}</TableCell>
                <TableCell align="center">{player.games.map((game)=>{
                  return `${game}, `;
                })}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

            </>
     );
}
 
export default TeamTable;