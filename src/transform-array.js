const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (arguments.length === 0 || !Array.isArray(arr)){
    throw new Error();
  }

  if (arr.length === 0) {
    return [];
  }

  let transformeaArray = new Array();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      transformeaArray.push("--discardedElement")
      i++;
    }
    else if (arr[i] === "--discard-prev") {
      transformeaArray.pop();
      
    }
    else if (arr[i] === "--double-next") {
      if (i < arr.length - 1){
        transformeaArray.push(arr[i + 1]);
      }
    }
    else if (arr[i] === "--double-prev") {
      if (transformeaArray.length !== 0){
        let lastElement = transformeaArray.pop();
        transformeaArray.push(lastElement);
        transformeaArray.push(lastElement);
      }
    }
    else {
      transformeaArray.push(arr[i]);
    }
  }

  return transformeaArray.filter(element => { return element !== "--discardedElement" });
};
