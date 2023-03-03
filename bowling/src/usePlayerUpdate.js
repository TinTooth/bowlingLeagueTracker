const usePlayerUpdate = () => {
//  eventually functions will make API Requests

const addGame = (setdata,data,team,player,score) => {
    console.log(data);
    data.teams[team].players[player].games.push(score);
    let newdata = {...data}
    setdata(newdata)
}

const updateAverage = (setdata,data,team,player) => {
    let sum = 0
    data.teams[team].players[player].games.forEach(game => {
        sum += game       
    });
    let result = sum/data.teams[team].players[player].games.length
    data.teams[team].players[player].average = result
    let newdata = {...data}
    setdata(newdata)
}





return [addGame,updateAverage]

}

export default usePlayerUpdate