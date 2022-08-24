function rollDice(minNum, maxNum) {
  minNum = Math.ceil(minNum);
  maxNum = Math.floor(maxNum);
  let diceResult = Math.floor(Math.random() * (maxNum- minNum) + minNum);
  console.log(diceResult);
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
  this.playerScore[player.name] = rollDice  
}

function PlayersDirectory() {
  this.players ={};
}

PlayersDirectory.prototype.addPlayer = function (player) {
  this.players[player.name] = player;
}

function Player(name, currentRoundScore, totalScore) {
  this.name = name;
  this.currentRoundScore = currentRoundScore;
  this.totalScore = totalScore;
}

// User 

