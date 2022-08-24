function rollDice(minNum, maxNum) {
  minNum = Math.ceil(minNum);
  maxNum = Math.floor(maxNum);
  let diceResult = Math.floor(Math.random() * (maxNum- minNum) + minNum);
  return diceResult;
}

function PlayersDirectory() {
  this.players ={};
}
