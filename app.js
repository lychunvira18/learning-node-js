var fs = require("fs");

// fs.mkdirSync("stuff");  // Makes directory called "stuff"

// fs.rmdirSync("stuff");  // Removes directory called "stuff"

// fs.mkdir("Stuff", () => {
//   fs.readFile("readthis.txt", "utf8", (err, data) => {
//     fs.writeFile("./Stuff/writeMe.txt", data, err => {
//       if (err) throw err;
//     });
//     if (err) throw err;
//   });
// });

fs.unlink("./Stuff/writeMe.txt", function() {
  fs.rmdir("stuff", err => {
    if (err) throw err;
  });
});
