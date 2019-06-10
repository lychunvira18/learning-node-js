var events = require("events");
var util = require("util");

// var myEmitter = new events.EventEmitter();

// myEmitter.on("someEvent", msg => {
//   console.log(msg);
// });

// myEmitter.emit("someEvent", "The event was emitted.");

var Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person("James");
var mary = new Person("Mary");
var ryu = new Person("Ryu");

var people = [james, mary, ryu];

people.forEach(function(person) {
  person.on("speak", function(msg) {
    console.log(person.name + " said: " + msg);
  });
});

james.emit("speak", "Hey dudes");

// console.log(james.name);
