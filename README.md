# Learning NodeJS

This repository is used solely for learning NodeJS.

## Lesson 9 :gear:

### Reading & Writing Files (fs)

- `fs` module contains functions used to read and write files
- `fs.readFileSync([filename],[character-set])` is used to read a file's content according to their character set and store them to a new variable _synchronously_
- `fs.writeFileSync([filename],[variable])` is used to write a file used the content stored in the specified variable _synchronously_
- `fs.readFile([filename],[character-set],[anonymous-function])` is used to read files and perform a function _asynchronously_
- `fs.writeFile([filename],[character-set],[anonymous-function])` is used to write files and perform a function _asynchronously_
  - The `function` performed in both the _asynchronous_ functions are used to take in data and detect error.
