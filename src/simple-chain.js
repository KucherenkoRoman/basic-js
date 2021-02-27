const CustomError = require("../extensions/custom-error");


const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (arguments.length === 0){
      this.chain.push("( )");
    } else {
      this.chain.push("( " + value + " )");
    }

    return this;
  },
  removeLink(position) {
    if (arguments.length === 0 || !Number.isInteger(position) || position > this.chain.length || position < 0) {
      this.chain = [];
      throw new Error();
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let outputChain = this.chain.join("~~");
    this.chain = [];
    return outputChain;
  }
};

module.exports = chainMaker;
