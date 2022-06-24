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


document.querySelector("#comment-button")
addEventListener("click", sayMyName);

function sayMyName() {
    let entry = document.querySelector("#g-comment").value
      let p = document.createElement("p");
      p.textContent = `${entry}`
    document.querySelector("#damjs").appendChild(p)
  }
// let getGames = () =>{
    function getAllGames(){
    fetch(url)
    .then(response => response.json())
    .then(games =>  {
      let html = ''
      games.map(game => {
        html+=`
        <li><h2>${game.title}<h2></li>
        <li>${game.game_url}</li>
        <li>${game.short_description}</li>
        <li>${game.genre}-genre</li>
        <li>${game.release_date}</li>
        <li>${game.freetogame_profile_url}</li>
        <li>${game.thumbnail}</li>
        `
      })
    document.getElementById("games").innerHTML = html
    })
    }


    function initialize(){
        getAllGames()
    }
    initialize()


 