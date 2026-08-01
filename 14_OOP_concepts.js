// it covers the five main pillars of OOP concepts: Encapsulation, Abstraction, Inheritance, Polymorphism,  and Composition.
// classes and objects are the building blocks of OOP, and they allow developers to create modular and reusable code.


//1. classes and objects
class Student {
    static collageName = " ACE collage "
    static totalStudents = 0;

    constructor(name, marks){
        this.name = name;
        this._marks = marks;
        Student.totalStudents++;
    }
    // getter method access without () .
    get grade(){
        if(this._marks >= 90) return "A+";
        if(this._marks >= 75) return "A";
        if(this._marks >= 60) return "C";
        if(this._marks >= 50) return "D";
        return "fail";
    }

        // setter method - validation at the time of initialization
        set marks(newMarks){
            if(newMarks < 0 || newMarks > 100 ){
                console.log("submit the marks between 0 to 100 ");
                return ;
            }

            this._marks = newMarks;
        }

      introduce (){
            console.log(` hey!, i am ${this.name}  , Grade: ${this.grade}`);
        }

        static collageInfo(){
            console.log(` collega :${Student.collageName} and totalStudents :${Student.totalStudents}`);
        }

}



//2. Encapsulation - wrapup the data into one class 
class BankAccount{
    #Balence;
    constructor(owner , initialBalence = 0){
        this.owner = owner;
        this.#Balence = initialBalence;
    }

    deposit(amount){
        if( amount <= 0 ){
            console.log("deposit a positve amount , procces failed ");
            return;
        }
        this.#Balence += amount;
        console.log(`${amount} deposit successfully , current balence ${this.#Balence}`);
    }

    withdraw(amount){
        if(amount >this.#Balence || amount <=0){
            console.log("insuffient balence ! please enter a valid money ");
            return;
        }
        this.#Balence -= amount;
        console.log(`${amount} withdraw successfully , current balence ${this.#Balence}`)
    }

    get getBalence(){
        return this.#Balence;
    }
}

//3. Inhertance - child class inherit the properties and methods of parent class
class Vehicle{
    constructor(brand, speed){
        this.brand = brand;
        this.speed = speed;
    }

    info(){
        console.log(` Brand :${this.brand} top speed of vehicle ${this.speed}.`);
    }
    honk(){
        console.log("Beep Beep!");
    }
}

class Car extends Vehicle{
     constructor(brand , speed , doors){
        super(brand,speed );
        this.doors = doors;
     }

     info(){
        super.info();
        console.log(`this car has ${this.doors}`);
     }
     
} 

class electricBike extends Vehicle{

    constructor(brand, speed , batteryRange){
        super(brand,speed);
        this.batteryRange = batteryRange;
    }

    info(){
        super.info();
        console.log(` battery range is ${this.batteryRange}`);
    }
}

//4. class  for the example three - polymorphism 
class Shape {
    area(){
        console.log("this is a function for area .");
    }
}
class Circle  extends Shape {
    constructor(radius){
        super();
        this.radius = radius;
    }
    area(){
        const result = Math.PI*this.radius**2;
        console.log("the area of a circle : ",(result.toFixed(2)));
    }
}
class Ractangle extends Shape{
    constructor(width , height){
        super();
        this.width = width;
        this.height = height;
    }
    area(){
        console.log(`Area of ractangle : ${this.height * this.width}`);
    }

}
class Triangle extends Shape {
    constructor(base , height ){
        super();
        this.base = base ;
        this.height = height;
    }
    area(){
        console.log(` Area of triangle : ${this.base * this.height /2}`);
    }
}

//5. class for the exapmle 5 - Abstraction 
class PaymenPathWay {
    constructor(){
        if(this.constructor === PaymenPathWay){
            throw new Error(`paymentpathway is not directly accesible `);
        }
    }
    processPayment (amount){  // abstract method
        throw new Error("define proccesspayment method in the child class");
    }

    initiate(amount){
        console.log("payment is initiating ",amount);
        this.processPayment(amount);
        console.log("payment completed ");
    }

}
class UpiPayment extends PaymenPathWay{
    processPayment(amount){
        console.log(`payment ${amount} is in proccesssing through UPI`);
    }
}
class CardPayment extends PaymenPathWay{
    processPayment(amount){
        console.log(`payment ${amount} is in proccesssing through Card`);
    }
}



// class call for example one( student )
const s1 = new Student("Aman" , 78);
const s2 = new Student("Rahul" , 87);

s1.introduce ();
s2.introduce ();
    
s1.marks = 150;  // show the rejection 
s1.marks = 79;
s1.introduce();

Student.collageInfo();

// class call for example 2 (Bank Account )
const x1 = new BankAccount("Aman " , 1000);
 x1.deposit(1000);
x1.withdraw(500);
console.log("Final balence ", x1.getBalence);


// class object call for the example 3 
const myCar = new Car("tata ", 110, 5);
myCar.info();
myCar.honk();

console.log(" --- ");
const myBike = new electricBike("ola" , 90 , "180km");
myBike.info();

// class object call for the example 4
const myShape = new Shape();
myShape.area();
const myCircle = new Circle(5);
myCircle.area();
const myRactangle = new Ractangle(4,6);
myRactangle.area();
const myTriangle = new Triangle( 6 , 5);
myTriangle.area();

// class object call for the example 5
   const upipay = new UpiPayment();
   upipay.initiate(499);
   const cardpay = new CardPayment();
   cardpay.initiate(599);