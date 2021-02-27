const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { repeatTimes = 1, separator = '+' , addition = "", additionRepeatTimes = 1, additionSeparator = '|'}) {
  
  let finalAddition = "";
  if (addition !== ""){
    for (let i = 0; i < additionRepeatTimes; i++) {
      if (i < additionRepeatTimes - 1) {
        finalAddition += addition + additionSeparator;
      } else {
        finalAddition += addition
      }
    }
  }

  let finalStr = "";
  for (let i = 0; i < repeatTimes; i++){
    if (i < repeatTimes - 1) {
      finalStr += str + finalAddition + separator;
    } else {
      finalStr += str + finalAddition
    }
  }
  
  return finalStr;
};
  