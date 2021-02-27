const CustomError = require("../extensions/custom-error");
const mounths = ["winter",
                 "winter",
                 "spring",
                 "spring",
                 "spring",
                 "summer",
                 "summer",
                 "summer",
                 "autumn",
                 "autumn",
                 "autumn",
                 "winter"
                ];

module.exports = function getSeason(date) {
  if (arguments.length === 0) {
    return "Unable to determine the time of year!";
  }

  if (!(date && Object.prototype.toString.call(date) === "[object Date]" && !isNaN(date.getTime()))) {
    throw new Error();
  }

  return mounths[date.getMonth()];
};
