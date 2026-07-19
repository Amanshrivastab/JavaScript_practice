  //topoc date time nad math library function 

  //1. get current date and time 
  let now = new Date();
  console.log("current date and time: ", now);
    //2. formatting of date 
    let birthday = new Date(2007,2,9);
    console.log(`specific date of  birthday: ${birthday.toDateString()}`);
//3. to extract the day month year hour and minutes 
let d = new Date();
console.log(` year: ${d.getFullYear()} , month:${d.getMonth()+1} , day:${d.getDate()} `);
console.log(` hours ${d.getHours()}, minutes: ${d.getMinutes()}, seconds: ${d.getSeconds()}`);

//4. find day of week 
let days = ["sunday","monday","tuesday","wednesday","thursday","friday","staurday"];
console.log(`to days day is ${days[[d.getDay()]]}`);

//5. countdown timer 
function daysUntilEvent (eventDate){
    let today = new Date();
    let diff = eventDate - today;
    return Math.ceil(diff/(1000*60*60*24));
}
let newYear = new Date(2027,0,1);
console.log(`days until new year : ${daysUntilEvent(newYear)}`);

//6.time formating - chage of 24hr to 12AM/PM
function formatTime(date){
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hour >= 12 ? "PM" : "AM";
    hour = hour % 12;
    hour = hour ? hour : 12;
    minutes = minutes < 10? "0"+minutes:minutes;
    return `${hour}:${minutes} ${ampm}`;
}
console.log(`format time : ${formatTime(new Date())}`);

// js maths library function 
console.log(Math.abs(-15));// 15
console.log(Math.abs(7)) // abs value if 7 is same 
// reduce decimal part 
console.log(Math.trunc(9.999));
console.log(Math.trunc(-9.99));
// math sign() is for check either the number is positive negative and zero 
console.log(Math.sign(-5));
console.log(Math.sign(5));
console.log(Math.sign(0));
console.log(Math.log(10))// lagorithmic value of 10
console.log(Math.exp(2));
console.log(Math.hypot(3,4))// fin the hypotenuse of triangle

// math function useable for floating point number 
console.log(0.1+0.2);// it gives us a bug in palce of (0.3) gives 0.300000004
let result = 0.1+0.2;
console.log(result.toFixed(2)) // fix the bug by to fixed 

let num = 123.45678
console.log(num.toPrecision(5))// to set total  digits 

function isEqual(a,b){
    return Math.abs(a-b) < Number.EPSILON
}
console.log(0.1+0.2,0.3);// true bcz safe comparison 

function roundTo(num, place){
    let factor = Math.pow(10, place);
    return Math.round(num*factor)/factor

}
console.log(0.1+0.2,2);//0.3  rduces the place of decimal number 
let price = 19.99*3
console.log(price)
console.log(price.toFixed(2))// to reduce concurancy in the price 


