var a = 10;
let b = 20;
const c =30;
console.log(a,b,c);

a =15;
b = 25;
// c = 35 it shows an error bcz we do not inilise the constant value again 

// 2. Block scope example 
if (true){
    let x = 100;
    const y = 200;
    var z  = 300;

}
console.log ( z) //  var scope is global 
// console.log (x);
// console.log (y); // these are not assesible .

// 3.  changing of const  const array/object
const person  =  { name : "Aman" , age : 21}
person.age = 22;
console.log(person);

// 4. hosting ka difference 
console.log(x1);
var x1 = 5;

// console.log(x2)  let  can not be use before thatr defination 
let  x2 = 10;
// 5. temporal dead zone 
{
    //console.log(typeof (x3));  let and var shows the TDZ 
    let  x3 = " hellow ";
}

console.log(typeof x4); // var shows only the undefined it no show the error 
var x4 = " world ";
