document.addEventListener("DOMContentLoaded", () => {
     getGames();
  });
const url = "https://www.freetogame.com/api/games"

let getGames = () =>{
    fetch(url)
    .then(response => console.log(response.json()))
}

 