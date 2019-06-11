var fs = require("fs");

fs.readFile("readMe.txt", "utf8", (err, data) => {
  fs.writeFile("writeMe.txt", data, err => {
    if (err) throw err;
    console.log("It is saved!");
  });
  if (err) throw err;
});
// fs.writeFileSync("writeMe.txt", readMe);

console.log("test");
