// 1. simple if staement 
let age =  20;
if (age >= 18){
    console.log(" you are adult ");
}

//2. if else stement 
let marks = 45 ;
if (marks >= 40){
    console.log("you assed ");
}else{
    console.log(" you failled ");
}

//3. if else and if elsse ladder 
let percentage = 85;
if(percentage >= 90){
    console.log("grade A+")
}
else if(percentage >= 75){
    console.log("Grade A");
}
else if(percentage >= 50){
    console.log("Grade B");
}else{
    console.log("Grade F");
}

//4. Nested if else stement 
let num=  15;
if (num >0){
    if(num % 2 === 0){
        console.log(" positve even number ");
    }else{
        console.log(" positive odd number ");
    }
}

//5. ternary oprator short if else satement 
let userAge = 16;
let canVote = (userAge >= 18)? "Eligible to vote ":" not eligible to  vote ";
console.log("5",canVote);

//6. switch staement 
let day = 3;
switch(day){
    case 1:
        console.log("monday");
        break;
    case 2:
        crossOriginIsolated.log("tuesday");
        break;
    case 3:
        console.log(" wednesday");
        break;
    default:
        console.log(" invalid day ")
}

//7. swich with caases to gather 
let fruit = "mango";
switch(fruit){
    case "apple":
    case "mango":
    case "banana":
        console.log("these are common fruit ");
        break;
    default:
        console.log(" unknown fruit ");

}

//8. logical and (&& ) in condition 
let userName  = "Admin";
let password = "1234";
if(userName === "Admin" && password === "1234"){
    console.log(" login successful ");
}else{
    console.log(" login fail ");
}

//9. logical or in condittion 
let isWeekend= false;
let isHoliday = true;
if(isWeekend || isHoliday){
    console.log("no work today ");
}else{
    console.log(" it is a working day ");
}

//10. checking multiple condition for leap yaer with cahin if else 
let year = 2028;
if (year % 4 === 0 && year %100 !== 0){
    console.log("leap year");
}else{
    console.log(" not a leap  year ");

}

//11. truty and falsy value in condition 
let val = 0;
if(val){
    console.log(" it is a falsy value ");
}else {
    console.log("it is truthy value ");

}

//12. avoiding error of undefined 
let userobj = {name:"Aman"};
if(userobj?.address?.city){
      console.log(" City:", userObj.address.city);
}else{
    console.log(" city is not available ");
}