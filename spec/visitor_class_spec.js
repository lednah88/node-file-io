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
    });
})