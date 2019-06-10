# Learning NodeJS

This repository is used solely for learning NodeJS.

## Lesson 7 :gear:

### Module Patterns

- `module.exports` is basically an empty object, so in exporting, you have various ways in doing so

#### Option 1

```javascript
module.exports.counter = arr => {
  return "There are " + arr.length + " elements in this array";
};
```

#### Option 2

```javascript
var counter = arr => {
  return "There are " + arr.length + " elements in this array";
};

module.exports = counter;
```

#### Option 3

```javascript
var counter = arr => {
  return "There are " + arr.length + " elements in this array";
};

var adder = (a, b) => {
  return `The sum of ${a} and ${b} is ${a + b}`;
};

module.exports = {
  counter: counter,
  adder: adder
};
```
