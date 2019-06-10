// module.exports.counter = arr => {
//   return "There are " + arr.length + " elements in this array";
// };

// module.exports.adder = (a, b) => {
//   return `The sum of ${a} and ${b} is ${a + b}`;
// };

// module.exports.pi = 3.142;

var counter = arr => {
  return "There are " + arr.length + " elements in this array";
};

var adder = (a, b) => {
  return `The sum of ${a} and ${b} is ${a + b}`;
};

var pi = 3.142;

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
};
