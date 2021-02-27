const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  constructor (direction) {
    this.mashineDirection = direction;
  }

  createKey(message, key) {
    let keyArr = [];
		let keyPosition = 0;

    for (let i = 0; i < message.length; i++){
    	if (!this.alphabet.includes(message.charAt(i))) {
      	keyArr.push(message.charAt(i));
      } 
      else {
      	keyArr.push(key.charAt(keyPosition));
        keyPosition = keyPosition + 1 >= key.length ? 0 : ++keyPosition;
      }
    }

    return keyArr.join("");
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }

    message = message.toUpperCase();
    key = this.createKey(message, key.toUpperCase());
    let encrypredMessage = [];
    
    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message.charAt(i))){
        encrypredMessage.push(this.alphabet[(this.alphabet.indexOf(message.charAt(i)) + this.alphabet.indexOf(key.charAt(i))) % this.alphabet.length]);
      } else encrypredMessage.push(message.charAt(i));
    }

    return this.mashineDirection === false ? encrypredMessage.reverse().join("") : encrypredMessage.join(""); 
  }  

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error();
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = this.createKey(encryptedMessage, key.toUpperCase());
    let decrypteddMessage = [];

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (this.alphabet.includes(encryptedMessage.charAt(i))) {
        decrypteddMessage.push(this.alphabet[(this.alphabet.indexOf(encryptedMessage.charAt(i)) + this.alphabet.length - this.alphabet.indexOf(key.charAt(i))) % this.alphabet.length])
      }
      else {
        decrypteddMessage.push(encryptedMessage.charAt(i));
      }
    }

    return this.mashineDirection === false ? decrypteddMessage.reverse().join("") : decrypteddMessage.join(""); 
  }
}

module.exports = VigenereCipheringMachine;
