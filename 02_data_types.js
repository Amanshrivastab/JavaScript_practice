  // perimitive data types
  let name = "Aman";
  let age = 19;
  let isStudent = true;
  let value = undefined ;
  let empty = null;
  let big = 199n;
  let id = Symbol("id");

  console.log(typeof name );
  console.log(typeof age );
  console.log(typeof isStudent);
  console.log(typeof value);
  console.log(typeof empty);  // null return the object and it is a bug of the java script 
  console.log(typeof big );
  console.log(typeof id);

  // 2. special cases of number type 
  let x = 10;
  let y = 10.5;
  let z = 10/0;
  let w = -10/0;  // it return the -infinity 
  let nan = "abc" * 2; // it returns the NaN

  console.log( z , w , nan );
  console.log(typeof nan) // it return the number , bcz the nun is a type off number 
  console.log(Number.isInteger(x)); // true 
  console.log(Number.isInteger(y));// false 

  //3.  non primitve data or referance type of data array , function , object 
let obj ={ name : "Aman" , age : 19};
let arr = [2,4,6,"abc"];
function func (){
    console.log(" the function is called ");
    return 1;
}

console.log(typeof obj);
console.log(typeof arr); // array is also shows the object type 
console.log(typeof func);
console.log(Array.isArray(arr));

// 4. type conversion (explicit )
let str = "1234";
let strTonumber = Number(str);
console.log(strTonumber, typeof strTonumber); // string to number conversion 

let num = 234;
let numTostr = String(num);
console.log(numTostr, typeof numTostr); // conversion of number to string

let bool = Boolean(0);
console.log(bool,typeof bool); // number to boolean conversion 

// 5. implicit type conversion 
console.log("2" + 2);
console.log(2 + 2);
console.log("5"*"2") ;// retrun 10 bcz it convert the voth string to the number 
console.log("5" - 3); // it convert the string to number 


//6. better way to type checking 
console.log(typeof []);
console.log(typeof null);
console.log(typeof {});
// these are wrong way to check bcz it return the object 
console.log([] instanceof Array); //true
console.log(Object.prototype.toString.call(null));// [object null]

// 7. its a dynamic type language 
let data = 27;
console.log(typeof data );

data  ="it change the value to string  "
console.log (typeof data );

data = { name :"new "};
console.log(typeof data );

