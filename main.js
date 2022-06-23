document.addEventListener("DOMContentLoaded", () => {
    //  getGames();
  });
const url = "https://www.freetogame.com/api/games"

let getGames = () =>{
    fetch(url)
    .then(response => console.log(response.json()))
    .then(games =>{
      games.map(game =>{
          console.log(game)
      })
    })
 
    .catch(error =>console.log(error))
}

getGames();

 