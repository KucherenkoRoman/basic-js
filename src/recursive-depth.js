const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    
    return 1 + Math.max(0, ...arr.map(element => this.calculateDepth(element)));
  }
};