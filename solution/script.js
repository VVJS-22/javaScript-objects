const student = {
    firstName: 'Santhosh',
    class: 10,
    marks: {
        maths: 96,
        english: 89
    },
    result: function () {
        let sureName = "Kumar"
        console.log(`${this.firstName} ${sureName} completed his 10th standard with 96%`);
    }
}

console.log(typeof student);

console.log(student);
console.log(student.class);
console.log(student.firstName);

console.log(student["class"]);

console.log(student.marks);
console.log(student.marks.english)

student.result();

function Person () {
    this.name = "Jayesh",
    this.age = 22
}

const person = new Person();

const person2 = new Person();

console.log(person);
console.log(person2);

function Student (name, age, gender) {

    this.studentName = name,
    this.studentAge = age,
    this.studentGender = gender,

    this.info = function () {
        return ((`${this.studentName} is ${this.studentAge} years old ${this.studentGender}`));
    }
}

const student1 = new Student ('Reethu', 16, 'female');
const student2 = new Student ('Ragul', 20, 'male');

console.log(student1);
console.log(student1.studentName);
console.log(student2.info());


let man = {
    name: 'Sai'
}

console.log(man);

function Man () {
    this.name = "Sai"
}

let man1 = new Man ();
let man2 = new Man ();

console.log(man1, man2);

man1.age = 22;

console.log(man1);

man2.name = "Jayesh";

console.log(man2);

man1.greet = function () {
    return ("hello");
} 

console.log(man1.greet());
// console.log(man2.greet());

Man.prototype.gender = "male";

console.log(man1.gender);
console.log(man2.gender);

let a = new Object("hello");
let b = new String("Jai");
let c = new Number(5);
let d = new Boolean(true);

console.log(a,b,c,d);

const people = {
    firstName: "Tamil",

    get getName() {
        return this.firstName;
    }
}
console.log(people.firstName);
console.log(people.getName);

const public = {
    firstName: "Tamil",

    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(public.firstName);
public.changeName = "Ganesh";
console.log(public.firstName);

const car = {
    company: 'Audi'
}

Object.defineProperty(car, "getCompanyName", {
    get: function () {
        return this.company;
    }
})

Object.defineProperty(car, "changeCompanyName", {
    set: function (value) {
        this.company = value;
    }
})

console.log(car.company);

car.changeCompanyName = "Tesla";

console.log(car.company);


