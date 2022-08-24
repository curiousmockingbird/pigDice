Describe: rollDice()

Test: "It will generate a random number from 1 to 6."

Code:
rollDice(1,7);

Expected Output: return <a number between 1-6>


Test: "It will store the random number between 1-6 in a variable."

Code:
rollDice(1,7);

Expected Output: let diceResult = <a number between 1-6>

---------

Describe: PlayersDirectory()

Test: "It will create an object with a players property with an empty array as value."

Code:
PlayersDirectory();

Expected Output: 
> players: {};

Test: "It will create a method for the PlayerDirectory() object prototype that will nest a Player object instance inside of the PlayerDirectory object instance."

Code:
PlayersDirectory.prototype.addPlayer(player);

Expecteed Output:
>players: {player};

---------

Describe: Player()

Test: "It will create an object prototype with a name property with a string value, a current round score with a number value, and a total score with a number value."

Code:
Player(name, currentRoundScore, totalScore);

Expected Output:
> name: name;
> currentRoundScore: currentRoundScore;
> totalScore: totalScore;
