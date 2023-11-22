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

