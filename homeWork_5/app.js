// **************************** Task 1 ****************************

function propsCount(obj) {
    return Object.keys(obj).length;
}
let car = {
    speed: 180,
    color: 'blue',
    wheels: 4,
    doors: 4,
    seats: 5,
    price: 1000000
};
console.log(propsCount(car));

// **************************** Task 2 ****************************

// reuse object 'car'
function showProps(obj) {
    return Object.entries(obj);
}
console.log(showProps(car));

// **************************** Task 3 ****************************

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName() {
        return `${this.name} ${this.surname}`;
    }
}
class Student extends Person {
    constructor(name, surname, admYear) {
        super(name, surname);
        this.showCourse = admYear;
    }
    showFullName(middleName) {
        return `${this.name} ${middleName} ${this.surname}`;
    }
    get showCourse() {
        return this._course;
    }
    set showCourse(year) {
        const nowYear = (new Date).getFullYear();
        try {
            if ((nowYear - year + 1) > 6) { // verify year whether more than 6 years ago
                throw new Error('You are not the student anymore');
            } else if (year > nowYear) { // verify year whether less than current
                throw new Error('You are not the student yet');
            } else { this._course = (nowYear - year + 1); }
        } catch(e) { 
            console.log(e.message);
            this._course = null; // setting null value in case invalid data
        };  
    }
}
const student = new Student('Vsevolod', 'Kozub', 2023);
console.log(student.showFullName('Anatoliyovych'));
console.log('Current course: ' + student.showCourse);

// **************************** Task 4 ****************************

class Worker {
    #experience = 1.2;
    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }
    get experience() { return this.#experience; }
    set experience(value) { this.#experience = value; }
    showSalary() {
        return this.dayRate * this.workingDays;
    }
    showSalaryWithExperience() {
        return this.#experience * this.showSalary();
    }
}

// Initialize 'Department' class which contains all workers and methods related to workers of the Department

class Department {
    constructor(workers) {
        this.workers = workers;
    }
    showDepList() { // show list of workers of the Department
        for (const worker of this.workers) {
            console.log(worker.fullName);
            console.log(worker.fullName + ' salary: ' + worker.showSalary());
            console.log('New experience: ' + worker.experience);
            console.log(worker.fullName + ' salary: ' + worker.showSalaryWithExperience());
            worker.experience = 1.5;
            console.log('New experience: ' + worker.experience);
            console.log(worker.fullName + ' salary: ' + worker.showSalaryWithExperience());
        };
    }
    sortDepBySalaryWithExp() { // show list of workers sorted by salary with experience
        let workersSorted = this.workers.toSorted(this.sortBySalaryWithExp);
        console.log('Sorted salary:');
        for (const worker of workersSorted) {
            console.log(worker.fullName + ' ' + worker.showSalaryWithExperience());
        };
    }
    // method which is called when we need to sort by salary with experience
    sortBySalaryWithExp(a, b) {
        return a.showSalaryWithExperience() - b.showSalaryWithExperience();
    }
}

const workers = [];
workers.push(new Worker('Vsevolod Kozub', 100, 10));
workers.push(new Worker('Taras Lavruk', 150, 30));
workers.push(new Worker('Facundo Mayon', 200, 29));
workers.push(new Worker('Jake Magin', 500, 28));

let laborDepartment = new Department(workers);
laborDepartment.showDepList();
laborDepartment.sortDepBySalaryWithExp();

// **************************** Task 5 ****************************

class GeometricFigure {
    getArea() {}
    toString() { return Object.getPrototypeOf(this).constructor.name; }
}
class Circle extends GeometricFigure {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() { return Math.PI * this.radius * this.radius; }
}
class Square extends GeometricFigure {
    constructor(side) {
        super();
        this.side = side;
    }
    getArea() { return this.side * this.side; }
}
class Triangle extends GeometricFigure {
    constructor(sideA, sideB, sideC) {
        super();
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    getArea() {
        const s = (this.sideA + this.sideB + this.sideC) / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }
}
function handleFigures(figures) {
    const totalArea = figures.reduce((total, figure) => total + figure.getArea(), 0);
    for (const figure of figures) {
        console.log('Geometric figure: ' + figure.toString() + ' - area: ' + figure.getArea());

    }
    console.log('Total area: '+ totalArea);
}
const figures = [new Circle(2.5), new Square(5), new Triangle(5, 5, 5)];
console.log(handleFigures(figures));
