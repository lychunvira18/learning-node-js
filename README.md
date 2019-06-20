# Learning NodeJS

This repository is used solely for learning NodeJS.

## Lesson 15 :gear:

### Pipes

- **Pipes** take data from a readstream to a writestream directly

```javascript
var server = http.createServer((req, res) => {
  console.log("Request was made: " + req.url);
  res.writeHead(200, { "Content-Type": "text/plain" });
  var myReadStream = fs.createReadStream(__dirname + "/readMe.txt", "utf8");
  myReadStream.pipe(res);
});
```

- `myReadStream.pipe([writeStream])` pipes a readstream to a writestream for a response
