let person = {
  name: "Aman",
  age: 21,
  isStudent: true
};
console.log("1. Basic Object:", person);
 
// 2. Accessing object properties (dot & bracket notation) 
console.log("2. Dot notation:", person.name);
console.log("2. Bracket notation:", person["age"]);
 
// 3. Nested Object
let student = {
  name: "Aman",
  address: {
    city: "Delhi",
    pincode: 110001
  }
};
console.log("3. Nested Object city:", student.address.city);
 
// 4. Symbol basics
let sym1 = Symbol("id");
let sym2 = Symbol("id");
console.log("4. Symbol type:", typeof sym1);
console.log("4. Symbols are unique even with same description:", sym1 === sym2); // false
 
// 5. Value of a Symbol (description) 
console.log("5. Symbol description:", sym1.description); // "id"
console.log("5. Symbol toString:", sym1.toString());       // "Symbol(id)"
 
// 6. Using Symbol as a unique object key
let uniqueId = Symbol("userId");
let user = {
  name: "Aman",
  [uniqueId]: 12345 // symbol as key, avoids property name clashes
};
console.log("6. Symbol as key value:", user[uniqueId]);
console.log("6. Normal keys only (Symbol hidden):", Object.keys(user)); // ["name"]
 
//  7. Object Destructuring (basic)
let { name, age } = person;
console.log("7. Destructured name:", name, "age:", age);

//8. destructuring with naming 
let{ name: fullName, isStudent: studying } = person;
console.log("8. Renamed destructure:", fullName, studying);
 
// 9. Destructuring with default values 
let { country = "India" } = person; // property not present, so default used
console.log("9. Default value destructure:", country);
 
//- 10. Nested destructuring
let { address: { city } } = student;
console.log("10. Nested destructure:", city);
 
//- 11. Object Method (function inside object)
let calculator = {
  a: 10,
  b: 5,
  add: function () {
    return this.a + this.b;
  },
  subtract() { // shorthand method
    return this.a - this.b;
  }
};
console.log("11. Object method add:", calculator.add());
console.log("11. Object method subtract:", calculator.subtract());
 
//  12. Object.keys(), Object.values(), Object.entries() 
console.log("12. Keys:", Object.keys(person));
console.log("12. Values:", Object.values(person));
console.log("12. Entries:", Object.entries(person));
 
// 13. Object.assign() - copying/merging object
let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
let merged = Object.assign({}, obj1, obj2);
console.log("13. Merged object:", merged); // {a:1, b:3, c:4}
 
//  14. Spread operator with objects 
let updatedPerson = { ...person, age: 22 }; // copy + override
console.log("14. Spread updated object:", updatedPerson);
 
//  15. Array of Objects (common real-world format)
let students = [
  { id: 1, name: "Aman", marks: 85 },
  { id: 2, name: "Riya", marks: 92 },
  { id: 3, name: "Karan", marks: 76 }
];
console.log("15. Array of Objects:", students);
 
//  16. Looping through Array of Objects 
students.forEach(s => {
  console.log(`16. ${s.name} scored ${s.marks} marks`);
});
 
// 17. Filtering Array of Object
let toppers = students.filter(s => s.marks > 80);
console.log("17. Toppers:", toppers);
 
// 18. Mapping Array of Objects (extracting only names)
let names = students.map(s => s.name);
console.log("18. Only names:", names);
 
//  19. Destructuring while looping array of object
students.forEach(({ name, marks }) => {
  console.log(`19. ${name} -> ${marks}`);
});
 