# Learning NodeJS

This repository is used solely for learning NodeJS.

## Lesson 19 :gear:

### Serving JSON Files

```javascript
var server = http.createServer((req, res) => {
  console.log("Request was made: " + req.url);
  if (req.url === "/home" || req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/index.html").pipe(res);
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/contact.html").pipe(res);
  } else if (req.url === "/api/ninjas") {
    res.writeHead(200, { "Content-Type": "application/json" });
    var ninjas = [{ name: "Ryu", age: 29 }, { name: "Yoshi", age: 32 }];
    res.end(JSON.stringify(ninjas));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    fs.createReadStream(__dirname + "/404.html").pipe(res);
  }
});
```
