"use strict";
const fs = require("fs")
class Visitor{
    constructor(fullNameOfVis,ageOfVis,date,time,comments,nameOfAssistant){
        this.fullName = fullNameOfVis
        this.age = ageOfVis
        this.date = date
        this.time = time
        this.comments = comments
        this.name = nameOfAssistant
    }
    save() {
    let fullNames = this.fullName.toLowerCase().replace(" ","_")
    let data = fs.writeFile(`visitor_${fullNames}.json`,`{
        "full name of visitor": "${this.fullName}", 
        "age of visitor": ${this.age}, 
        "date": "${this.date}",
        "time": "${this.time}", 
        "comments": "${this.comments}", 
        "name of assistant": "${this.name}"}`,(err)=>{
        if(err) throw err
    }) 
    }
    load() {
    
    }
}

let alice = new Visitor("Alice Cooper",18,"07:00","07-07-2020","nice","Sizwe")
alice.save()
let bob = new Visitor("Bob Marley",23,"16:15","11-08-2020","very informative","Rixongile")
bob.save()
let charlie = new Visitor("Charley Sheen",30,"20:30","11-08-2020","thank you","Tumi")
charlie.save()