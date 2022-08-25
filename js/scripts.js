function rollDice(minNum, maxNum) {
  minNum = Math.ceil(minNum);
  maxNum = Math.floor(maxNum);
  let diceResult = Math.floor(Math.random() * (maxNum- minNum) + minNum);
  if (diceResult > 1) {
    return diceResult;
  } else { 
  return 0;
  }
}

function TotalScore() {
  this.playerScore = {}; 
}

TotalScore.prototype.addScore = function (rollDice) {
  if (!this.playerScore[player.name]) { 
    this.playerScore[player.name] = rollDice;
  } else {
    this.playerScore[player.name] += rollDice;
  }
};

function PlayersDirectory() {
  this.players ={};
}

PlayersDirectory.prototype.addPlayer = function (player) {
  this.players[player.name] = player;
};

function Player(name, currentRoundScore, totalScore) {
  this.name = name;
  this.currentRoundScore = currentRoundScore;
  this.totalScore = totalScore;
}

//UI Logic
function handlePlayerFormSubmission (event) {
  event.preventDefault();
  let namePlayer1 = document.getElementById("name-player-1").value;
  let namePlayer2 = document.getElementById("name-player-2").value;
  
  let playersDirectory = new PlayersDirectory();
  let player1 = new Player(namePlayer1, 0, 0);
  let player2 = new Player(namePlayer2, 0, 0);

  playersDirectory.addPlayer(player1);
  playersDirectory.addPlayer(player2);

  document.getElementById("players-name").setAttribute("class","hidden");
  document.getElementById("game").removeAttribute("class","hidden");

  console.log(playersDirectory,player1,player2);

}

window.addEventListener("load", function () {
  let playerForm = document.getElementById("players-name");
  playerForm.addEventListener("submit", handlePlayerFormSubmission);
})
