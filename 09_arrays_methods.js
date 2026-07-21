//1. creating a array
let fruits = ["mango","apple","banana"];
console.log("Array : ",fruits);

//2. Accesing elements 
console.log("frist element ", fruits[0]);
console.log("last element ", fruits[fruits.length -1]);

//3. add and remeove operation inarray 
fruits.push("orange");  // add at last 
console.log("after push :",fruits);
fruits.pop();  //remove from last
console.log(" after pop :", fruits); 

//4.unshift and shift 
fruits.unshift("grapes");
console.log("after unshift ", fruits)  // unshifts add the element in start
fruits.shift();
console.log("after shift ", fruits); // remove from start

//5.slice method for take part of arry 
let number = [1,2,3,4,5,6];
console.log("sliced 1 to 3 :", number.slice(1,4));
console.log("original unchanged :", number);

//6. splice () - is for add or remove but original array changed 
let arr  = [1,2,3,4,5,6]
arr.splice(2,2,99);
console.log("after splice ",arr);

//7. map - is for transform each element 
let doubled = number.map( n=> n*2);
console.log("doubled :" ,doubled);

//8.filter - select array on the basis of condition 
let even = number.filter( n=> n%2 === 0 );
console.log("even number ", even);

//9. reduce - to convert the array into the string 
let sum  = number.reduce((acc, curr) => acc+curr,0);
console.log("sum", sum);
// 10. find, findindex()
let fristEven = number.find(n => n%2 ===0);
let fristEvenindex = number.findIndex(n => n%2 ===0);
console.log(fristEven , " rist index" , fristEvenindex);

// 11. importnt function of Array 
let unsort = [7,3,9,3,5];
console.log("sorted array ",unsort.sort( (a,b) => a-b));
console.log("sorted  in decendingarray ",unsort.sort( (a,b) => b-a));
console.log("reverse ",unsort.reverse());
console.log("check include 3?",unsort.includes(3));
console.log("index of elemnt is ",unsort.indexOf(9));
console.log("check every number > 0 ", number.every(n => n>0));
console.log("check some number >4?", number.some(n => n>4));

//12. concatination o arrays 
let arr1 = [4,6,8];
let arr2 = [3,5,7];
console.log("concat :", arr1.concat(arr2));
console.log("joined :",fruits.join(","));// convert arry to strig
console.log(" for chrck array:", Array.isArray("hellow")); // false bcz its a function
//13. cnvert the nested array into flat array
let nested = [1,[2,3],[4,[5,6]]];
console.log("flat (level 1) ", nested.flat());
console.log("deep flat ",nested.flat(Infinity));

//14.array destructuring and spread operator 
let [frist,second , ...rest] = number;
console.log(`frist ${frist} second ${second} rest ${rest}`);

let combined = [...arr1 , ...arr2 ,5,6];
console.log("combined with spread ", combined);
