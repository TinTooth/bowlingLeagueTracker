const usePlayerUpdate = () => {
//  eventually functions will make API Requests

const addGame = ({setData,data,player,score}) => {
    data[player].games.push(score);
    let newData = data;
    setData(newData);
}





return [addGame]

}

export default usePlayerUpdate