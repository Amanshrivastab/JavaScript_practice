// loops example for loop
let count = 10;
for(let i = 0; i<=count ; i++){   // write the counting for 10 
    console.log("count: ", i);
}

//2. while  and
let idx = 0;
while(idx<20){
    if(idx % 2 == 0){
        console.log("even number: ", idx);
    }else{
        console.log(" odd number: ", idx);
    }
    idx++;
}
 // 3.  do while loop 
console.log("do while loop example");
let index = 1;
do{
    console.log(index);
    index++;
}while( index<= 5);

//4.Nested if else statement  
for (let a = 1; a<3 ; a++){
    for(let b= 1; b<3; b++){
        console.log(`${a} x ${b} = ${a*b}`);
    }
}

//5. for loop with break 
for (let i = 0; i<10; i++){
    if(i==5) break;    // terminate at i =5
    console.log(i);
}

//6. for loop with continue 
for (let k =1; k<=5; k++){
    if(k ==3) continue;  // 3 will be skip
    console.log(k);
}

//7. for of loop [ fecting the length of the array]
let fruits = [ "mango","apple", "grapes"];
let name = "Aman";
for(let fruit of fruits){
    console.log (fruit);
}
for(let char of name){
    console.log(char);
}

//8. for in loops [  is for the objects ]
let user = {name:"Aman", age: 19, city:"uttar pradesh "};
for ( let key in user){
    console.log(` ${key} : ${user[key]}`);
}
for (let idx in fruits){
    console.log(`index ${idx} : ${fruits[idx]} `);
}

//9. for each method
let city = [ " Dehli ", "pune" , "mumbai"];
city.forEach(function(value, index){
    console.log(`index ${index} : ${value}`);
}   
)
 // foreach with arrow function
city.forEach((value, index) => {
    console.log(`index ${index} : ${value}`);
}
)

//10. for of loops with entries 
console.log("for of loop with entries ")
for (let [value,index] of fruits.entries()){
    console.log([value,index]);
}
//. for of loop with map 
let map = [ ["name", "Aman"], ["age", 19], ["city", "uttar pradesh"]];
for (let [key, value] of map){
    console.log(`${key} : ${value}`);
}

// 11. for of loop with set
let set = new Set(["mango", "apple", "grapes"]);
for(let key of set){
    console.log(key);
}

//12. comparing for of anfd for in 
console.log(" for of loop pick the value ")
for(let fruit of fruits) console.log(fruit);
console.log(" for in loop pickss the index ");
for(let fruit in fruits) console.log(fruits[fruit]);