/**
 * get payment token from API
 * @param {Boolean} success
 * @returns a resolved Promise representing success if success
 */
const getPaymentTokenFromAPI = (success) => {
  const p = new Promise((resolve, reject) => {
    if (success) {
      resolve({ data: "Successful response from the API" });
    } else {
      reject("")
    }
  });

  return p;
};

module.exports = getPaymentTokenFromAPI;
