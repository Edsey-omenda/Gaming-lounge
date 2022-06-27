document.addEventListener("DOMContentLoaded", () => {
    //  getGames();
  });


const baseUrl = "https://www.freetogame.com/api/games";
const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const apiUrl = `${proxyUrl}${baseUrl}`;

let image = document.getElementById("cover")
let title = document.querySelector("#title")
let playtime = document.getElementById("playtime")
let runtime = document.getElementById("runtime")
let description = document.getElementById("game-details") 
let level = document.getElementById("level") 
let spButton = document.getElementById("select-game") 
let comment = document.getElementById("comment") 
let pButton = document.getElementById("comment-button") 
let gameData = [];


document.querySelector("#comment-button")
addEventListener("click", sayMyName);

function sayMyName() {
    let entry = document.querySelector("#g-comment").value
      let p = document.createElement("p");
      p.textContent = `${entry}`
    document.querySelector("#damjs").appendChild(p)
  }
// let getGames = () =>{
// const getData = async () => {
//   const res = await fetch(apiUrl);
//   const games = await res.json();
//   gameData = games;
//   // console.log(gameData);

// };

// getData();
    function getAllGames(){
    fetch(apiUrl)
    .then(response => response.json())
    .then(games =>  {
      // console.log(games)
      let html = ''
      games.map(game => {
        html+=`
        <li><h2>${game.title}<h2></li>
        <li>${game.id}-game id</li>
        <li>${game.game_url}-game link</li>
        <li>${game.short_description}-about game</li>
        <li>${game.genre}-genre</li>
        <li>${game.release_date}-release date</li>
        <li>${game.freetogame_profile_url}</li>
        <li>${game.thumbnail}</li>
        <li>${game.platform}-play platform</li>
        <li>${game.publisher}-publisher</li>
        <li>${game.developer}-developer</li>
        `
      })
    document.getElementById("games").innerHTML = html
    })
    }


    function initialize(){
        getAllGames()
    }
    initialize()



 