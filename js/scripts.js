function rollDice(minNum, maxNum) {
  minNum = Math.ceil(minNum);
  maxNum = Math.floor(maxNum);
  let diceResult = Math.floor(Math.random() * (maxNum- minNum) + minNum);
  return diceResult;
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

