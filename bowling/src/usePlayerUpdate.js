const usePlayerUpdate = () => {
//  eventually functions will make API Requests

const addGame = (setdata,data,player,score) => {
    console.log(data);
    data.teams[0].players[player].games.push(score);
    let newdata = {...data}
    setdata(newdata)
}





return [addGame]

}

export default usePlayerUpdate