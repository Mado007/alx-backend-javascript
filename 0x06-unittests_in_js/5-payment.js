const Utils = require("./utils");

/**
 * Call the Utils.calculateNumber function to sum totalAmount and totalShipping
 * @param {Number} totalAmount
 * @param {Number} totalShipping
 */
const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  console.log(
    `The total is: ${Utils.calculateNumber("SUM", totalAmount, totalShipping)}`
  );
};

module.exports = sendPaymentRequestToApi;
