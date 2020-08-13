const {Visitor} = require("../src/visitor_class")
let bob = new Visitor(
    "Bob Marley",
    23,
    "16:15",
    "11-08-2020",
    "very informative",
    "Rixongile"
  );
describe("Visitor",()=>{
    const fs = require("fs")
    it("should have a full name",()=>{
        expect(bob.fullName).toBe("Bob Marley")
    })
    it("should have age",()=>{
        expect(bob.age).toBe(23)
    })
    it("should have date",()=>{
        expect(bob.date).toBe("16:15")
    })
    it("should have time",()=>{
        expect(bob.time).toBe("11-08-2020")
    })
    it("should have comments",()=>{
        expect(bob.comments).toBe("very informative")
    })
    it("should have the name of the assistant",()=>{
        expect(bob.name).toBe("Rixongile")
    })
    it("should be able to save files", function() {
        expect(bob.save()).toBeDefined();
    });
    it("should be able to load visitors data", function() {
        expect(bob.load("Bob Marley")).toBeDefined();
    })
    it("should throw an error for a wrong name", () => {
        expect(() => {
          bob.load("xongi");
        }).toThrow(new Error(err));
      });
})