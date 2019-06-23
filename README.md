# Learning NodeJS

This repository is used solely for learning NodeJS.

## Lesson 17 :gear:

### Serving HTML Pages

```javascript
var server = http.createServer((req, res) => {
  console.log("Request was made: " + req.url);
  res.writeHead(200, { "Content-Type": "text/html" });
  var myReadStream = fs.createReadStream(__dirname + "/index.html", "utf8");
  myReadStream.pipe(res);
});
```
