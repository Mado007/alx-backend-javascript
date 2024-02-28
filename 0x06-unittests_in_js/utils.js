const Utils = {
  calculateNumber:
    /**
     * Calculate an operation on the two given numbers and return the result
     * @param {String} type type of operation: SUM, SUBTRACT, or DIVIDE
     * @param {Number} a first number
     * @param {Number} b second number
     */
    (type, a, b) => {
      switch (type) {
        case "SUM":
          return Math.round(a) + Math.round(b);
        case "SUBTRACT":
          return Math.round(a) - Math.round(b);
        case "DIVIDE":
          b = Math.round(b);
          if (b === 0) {
            return "Error";
          }
          return Math.round(a) / b;
      }
    },
};

module.exports = Utils;
