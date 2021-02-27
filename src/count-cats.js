const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let countOfCats = 0;
  
  matrix.forEach(element => {
    element.forEach(innerElement => {
      if(innerElement === '^^'){
        countOfCats++;
      }
    });
  });

  return countOfCats;
  
};
