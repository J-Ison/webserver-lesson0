const functions = require("firebase-functions");

exports.doSomething = functions.https.onCall(doSomething);

/**
 *
 * @param {object} data The first number.
 * @param {object} context Firebase auth context
 * @return {object} the sum of the two numbers
 */
function doSomething(data, context) {
  const n1 = data.n1;
  const n2 = data.n2;

  return {
    add: n1 + n2,
    mul: n1 * n2,
  };
}

