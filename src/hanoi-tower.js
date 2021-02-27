const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let numberOfTurns = Math.pow(2, disksNumber) - 1;
  let timeInSeconds = Math.floor(numberOfTurns / (turnsSpeed / 3600));

  return {turns : numberOfTurns, seconds : timeInSeconds};
};
