//let initialNumber = parseInt(Math.floor(Math.random() * 10));
//console.log(initialNumber);
//let systemOutput = 'The System Choose - ';
//systemChoise = initialNumber <= 2 (rock)
//systemChoise = initialNumber <= 5 (paper)
//systemChoise = initialNumber <= 9 (scissor)
let totalWins = 0;
let totalLoses = 0;
let totalTies = 0;
function userChoiceRock() {
  let initialNumber = parseInt(Math.floor(Math.random() * 10));
  console.log(initialNumber);
  if (initialNumber <= 2) {
    console.log("Rock")
    document.getElementById('result').innerHTML = 'Tie';
    ++totalTies;
    document.getElementById("ties").innerHTML=`Total Ties - ${totalTies}`;
  } else if (initialNumber <= 5) {
    document.getElementById('result').innerHTML = 'Lose';
    ++totalLoses;
    document.getElementById("loses").innerHTML=`Total Loses - ${totalLoses}`;
  } else if (initialNumber <= 9) {
    document.getElementById('result').innerHTML = 'Win';
    ++totalWins;
    document.getElementById("wins").innerHTML=`Total Wins - ${totalWins}`;
  }
}
function userChoicePaper() {
  let initialNumber = parseInt(Math.floor(Math.random() * 10));
  console.log(initialNumber);
  if (initialNumber <= 2) {
    document.getElementById('result').innerHTML = 'Win';
    ++totalWins;
    document.getElementById("wins").innerHTML=`Total Wins - ${totalWins}`;
  } else if (initialNumber <= 5) {
    document.getElementById('result').innerHTML = 'Tie';
    ++totalTies;
    document.getElementById("ties").innerHTML=`Total Ties - ${totalTies}`;
  } else if (initialNumber <= 9) {
    document.getElementById('result').innerHTML = 'Lose';
    ++totalLoses;
    document.getElementById("loses").innerHTML=`Total Loses - ${totalLoses}`;
  }
}
function userChoiceScissors() {
  let initialNumber = parseInt(Math.floor(Math.random() * 10));
  console.log(initialNumber);
  if (initialNumber <= 2) {
    document.getElementById('result').innerHTML = 'Lose';
    ++totalLoses;
    document.getElementById("loses").innerHTML=`Total Loses - ${totalLoses}`;
  } else if (initialNumber <= 5) {
    document.getElementById('result').innerHTML = 'Win';
    ++totalWins;
    document.getElementById("wins").innerHTML=`Total Wins - ${totalWins}`;
  } else if (initialNumber <= 9) {
    document.getElementById('result').innerHTML = 'Tie';
    ++totalTies;
    document.getElementById("ties").innerHTML=`Total Ties - ${totalTies}`;
  }
}
