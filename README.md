# Learning NodeJS

This repository is used solely for learning NodeJS.

## Lesson 5 :gear:

### Function Expression

Function expression is basically storing an anonymous function in a variable so that it can be passed into another function.

```javascript
function callFunction(fun) {
  fun();
}

var sayBye = function() {
  console.log("Bye");
};

callFunction(sayBye);
```
