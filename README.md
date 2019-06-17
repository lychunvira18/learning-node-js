# Learning NodeJS

This repository is used solely for learning NodeJS.

## Lesson 14 :gear:

### Readable Streams

#### Streams

- **Writable streams** - allow node.js to write data to a stream
- **Readable streams** - allow to read data from a stream
- **Duplex** - can read and write to a stream

#### Readable Streams

- `var readStream = fs.createReadStream([directory],[charset])` creates a new readable stream from the directory and storing in a particular charset (encoding)
- `readStream.on([event-to-be-listened],[callback-function])` is used to listen to an event, triggering a function

```javascript
myReadStream.on("data", chunk => {
  console.log("New chunk received");
  console.log(chunk);
});
```
