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

const s1 = new Student("Aman" , 78);
const s2 = new Student("Rahul" , 87);

s1.introduce ();
s2.introduce ();
    
s1.marks = 150;  // show the rejection 
s1.marks = 79;
s1.introduce();

Student.collageInfo();

