# Learning NodeJS

This repository is used solely for learning NodeJS.

## Lesson 15 :gear:

### Writable Streams

- `var myWriteStream = fs.createWriteStream([directory])` is used to create a new writable stream at the directory.

```javascript
myReadStream.on("data", chunk => {
  myWriteStream.write(chunk);
});
```
