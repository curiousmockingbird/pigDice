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

/*
function TotalScore() {
  this.playerScore = {}; 
}

TotalScore.prototype.addScorePlayer1 = function (rollDice) {
  if (!this.playerScore[player1.name]) { 
    this.playerScore[player1.name] = rollDice;
  } else {
    this.playerScore[player1.name] += rollDice;
  }
};

TotalScore.prototype.addScorePlayer2 = function (rollDice) {
  if (!this.playerScore[player2.name]) { 
    this.playerScore[player2.name] = rollDice;
  } else {
    this.playerScore[player2.name] += rollDice;
  }
};
*/
function PlayersDirectory() {
  this.players ={};
}

PlayersDirectory.prototype.addPlayer = function (player) {
  this.players[player.name] = player;
};

Player.prototype.addScorePlayer1 = function (rollDice) {
  if (!this.totalScore) { 
    this.totalScore = rollDice;
  } else {
    this.totalScore += rollDice;
  }

};

function Player(name, currentRoundScore, totalScore) {
  this.name = name;
  this.currentRoundScore = currentRoundScore;
  this.totalScore = totalScore;
}

//UI Logic

let playersDirectory = new PlayersDirectory();

function handlePlayerFormSubmission (event) {
  event.preventDefault();
  let namePlayer1 = document.getElementById("name-player-1").value;
  let namePlayer2 = document.getElementById("name-player-2").value;
  
  let player1 = new Player(namePlayer1, 0, 0);
  let player2 = new Player(namePlayer2, 0, 0);

  playersDirectory.addPlayer(player1);
  playersDirectory.addPlayer(player2);

  document.getElementById("players-name").setAttribute("class","hidden");
  document.getElementById("game").removeAttribute("class","hidden");
  
  let player1Name = document.getElementById("player-1-name");
  let player2Name = document.getElementById("player-2-name");
  player1Name.innerText = namePlayer1;
  player2Name.innerText = namePlayer2;

}

function handleGameForm () {
  
/*   let totalScore = new TotalScore();*/
  let namePlayer1 = document.getElementById("name-player-1").value;
  let namePlayer2 = document.getElementById("name-player-2").value;
  let diceRoll = document.getElementById("dice-roll");
  let rollDiceNumber = rollDice(1,7);
  
  console.log(rollDiceNumber);
  console.log(playersDirectory.players.[namePlayer1]);
  playersDirectory.players.[namePlayer1].addScorePlayer1(rollDiceNumber);
  diceRoll.innerText = rollDiceNumber;

}

window.addEventListener("load", function () {
  let playerForm = document.getElementById("players-name");
  playerForm.addEventListener("submit", handlePlayerFormSubmission);
  let gameForm = document.getElementById("game-form");
  gameForm.addEventListener("click", handleGameForm);
})
