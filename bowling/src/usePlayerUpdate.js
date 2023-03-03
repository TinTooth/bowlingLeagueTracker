const usePlayerUpdate = () => {
//  eventually functions will make API Requests

const addGame = (setdata,data,team,player,score) => {
    console.log(data);
    data.teams[team].players[player].games.push(score);
    let newdata = {...data}
    setdata(newdata)
    // PUT Request HERE
}

const updateAverage = (setdata,data,team,player) => {
    let sum = 0
    data.teams[team].players[player].games.forEach(game => {
        sum += game       
    });
    data.teams[team].players[player].average = Math.round(sum/data.teams[team].players[player].games.length)
    let newdata = {...data}
    setdata(newdata)
    // Put Request HERE
    updateHandicap(setdata,data,team,player)
}

const updateHandicap = (setdata,data,team,player) => {
    let result = 210-data.teams[team].players[player].average
    if (result > 0) {
        data.teams[team].players[player].handicap = result
    }
    else {
        data.teams[team].players[player].handicap = 0
    }
    let newdata = {...data}
    setdata(newdata)
    // Put Request HERE
}

const updateAll =(setdata,data,team,player) => {
    data.teams.forEach((team, t)=> {
        team.players.forEach((player,p)=>{
            updateAverage(setdata,data,t,p);
        })
    })
    // Get Request HERE
}
return [addGame,updateAll]

}

export default usePlayerUpdate;