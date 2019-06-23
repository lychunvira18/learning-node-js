# Learning NodeJS

This repository is used solely for learning NodeJS.

## Lesson 18 :gear:

### Serving JSON Files

```javascript
var server = http.createServer((req, res) => {
  console.log("Request was made: " + req.url);
  res.writeHead(200, { "Content-Type": "application/json" });
  var myObj = {
    name: "Ryu",
    job: "Ninja",
    age: 29
  };
  res.end(JSON.stringify(myObj));
});
```
