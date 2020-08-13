"use strict";
const fs = require("fs");
class Visitor {
  constructor(fullNameOfVis, ageOfVis, date, time, comments, nameOfAssistant) {
    this.fullName = fullNameOfVis;
    this.age = ageOfVis;
    this.date = date;
    this.time = time;
    this.comments = comments;
    this.name = nameOfAssistant;
  }
  save() {
    let fullNames = this.fullName.toLowerCase().replace(" ", "_");
    fs.writeFile(
      `visitor_${fullNames}.json`,
      JSON.stringify(this, null, 4),
      (err) => {
        if (err) throw err;
      }
    );
  }
  load(fullName) {
    this.fullName = fullName;
    let fullNames = this.fullName.toLowerCase().replace(" ", "_");
    fs.readFile(`visitor_${fullNames}.json`, "utf8", (err, data) => {
      if (err) throw err;
      console.log(data);
    });
  }
}

let alice = new Visitor(
  "Alice Cooper",
  18,
  "07:00",
  "07-07-2020",
  "Kinda weird, I don't think he'll fit in",
  "Sizwe"
);
alice.save();
let bob = new Visitor(
  "Bob Marley",
  23,
  "16:15",
  "11-08-2020",
  "very informative",
  "Rixongile"
);
bob.save();
let charlie = new Visitor(
  "Charley Sheen",
  30,
  "20:30",
  "11-08-2020",
  "Winning!",
  "Tumi"
);
charlie.save();
alice.load("Alice Cooper");
bob.load("Bob Marley")
module.exports = {Visitor}