const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (arguments.length === 0 || !Array.isArray(members)) {
    return false;
  }


  let name = [];
  members.forEach(element => {
    if (typeof element === "string") {
      name.push(element.trim().charAt(0).toUpperCase());
    };
  });

  return name.sort().join("");
};
