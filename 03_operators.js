
// 1. Arithmetic Operators
let a = 10, b = 3;
console.log("1. Arithmetic:");
console.log("Addition:", a + b);       // 13
console.log("Subtraction:", a - b);    // 7
console.log("Multiplication:", a * b); // 30
console.log("Division:", a / b);       // 3.33
console.log("Remainder:", a % b);      // 1
console.log("Power:", a ** 2);         // 100
let c = 5;
console.log("Increment:", c++, "->", c); // 5 -> 6
console.log("Decrement:", c--, "->", c); // 6 -> 5

// 2. Assignment Operators
let x = 10;
console.log("\n2. Assignment:");
x += 5;  console.log("x += 5 ->", x); // 15
x -= 3;  console.log("x -= 3 ->", x); // 12
x *= 2;  console.log("x *= 2 ->", x); // 24
x /= 4;  console.log("x /= 4 ->", x); // 6
x %= 4;  console.log("x %= 4 ->", x); // 2
x **= 3; console.log("x **= 3 ->", x); // 8

// 3. Comparison Operators
console.log("\n3. Comparison:");
console.log(5 == "5");   // true - loose equality
console.log(5 === "5");  // false - strict equality
console.log(5 != "5");   // false
console.log(5 !== "5");  // true
console.log(10 > 5);     // true
console.log(10 < 5);     // false
console.log(10 >= 10);   // true
console.log(10 <= 9);    // false

// 4. Logical Operators
console.log("\n4. Logical:");
console.log(true && false); // false - AND
console.log(true || false); // true  - OR
console.log(!true);         // false - NOT

// 5. String Operators
console.log("\n5. String:");
let firstName = "Aman";
let lastName = "Sharma";
let fullName = firstName + " " + lastName; // concatenation
console.log(fullName);
let greet = `Hello ${fullName}, welcome!`; // template literal
console.log(greet);

// 6. Ternary Operator
console.log("\n6. Ternary:");
let age = 18;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status);

// 7. Type Operators
console.log("\n7. Type:");
console.log(typeof 42);            // "number"
console.log(typeof "hello");       // "string"
console.log(typeof true);          // "boolean"
console.log([] instanceof Array);  // true

// 8. Bitwise Operators
console.log("\n8. Bitwise:");
console.log(5 & 1);  // 1  - AND
console.log(5 | 1);  // 5  - OR
console.log(5 ^ 1);  // 4  - XOR
console.log(~5);     // -6 - NOT
console.log(5 << 1); // 10 - left shift
console.log(5 >> 1); // 2  - right shift

// 9. Nullish Coalescing (??) and Optional Chaining (?.)
console.log("\n9. Nullish & Optional Chaining:");
let user = null;
console.log(user ?? "Guest"); // "Guest"

let obj = { name: "Aman" };
console.log(obj?.address?.city); // undefined, no error

// 10. Spread and Rest Operators
console.log("\n10. Spread & Rest:");
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // spread
console.log(arr2); // [1, 2, 3, 4, 5]

function sum(...nums) { // rest
  return nums.reduce((acc, val) => acc + val, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// 11. Comma Operator
console.log("\n11. Comma Operator:");
let result = (1 + 2, 3 + 4); // last expression ki value milti hai
console.log(result); // 7