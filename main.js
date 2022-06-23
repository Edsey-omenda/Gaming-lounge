document.addEventListener("DOMContentLoaded", () => {
    //  getGames();
  });
const url = "https://www.freetogame.com/api/games"
let image = document.getElementById("cover")
let title = document.querySelector("#title")
let playtime = document.getElementById("playtime")
let runtime = document.getElementById("runtime")
let description = document.getElementById("game-details") 
let level = document.getElementById("level") 
let spButton = document.getElementById("select-game") 
let comment = document.getElementById("comment") 
let pButton = document.getElementById("comment-button") 

let getGames = () =>{
    fetch(url)
    .then(response => console.log(response.json()))
    .then(games =>{
      games.map(game =>{
         let ul = document.querySelector("#game-list")
      })
    })
 
    .catch(error =>console.log(error))
}

getGames();

 