// HOMEWORK PROBLEM 1:

const numbers = [1, 15, 3, 42, 8, 19, 7, 25, 11, 33]

const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(evenNumbers)

const bigNumbers = numbers.filter(number => number > 10)
console.log(bigNumbers)

const firstBig = bigNumbers.find(number => number > 20)
console.log(firstBig)

/*====================================================================================================================*/
console.log('==================================================');

// HOMEWORK PROBLEM 2:

const students = [
    { name: "Анна", age: 19, grade: 7, course: 2 },
    { name: "Диана", age: 17, grade: 8, course: 1 },
    { name: "Виктория", age: 21, grade: 5, course: 3 },
    { name: "Григорий", age: 18, grade: 9, course: 2 },
    { name: "Борис", age: 20, grade: 4, course: 3 },
    { name: "Евгений", age: 16, grade: 6, course: 1 },
]

const adults = students.filter(student => student.age >= 18)
console.log(adults)

const excellentStudents = students.filter(student => student.grade >= 8)
console.log(excellentStudents)

const secondCourse = students.filter(student => student.course === 2)
console.log(secondCourse)

const adultGoodStudents = adults.filter(student => student.grade >= 6)
console.log(adultGoodStudents)

const victoria = students.find(student => student.name === "Виктория")
console.log(victoria)

const firstExcellent = students.find(student => student.grade >= 8)
console.log(firstExcellent)

const tooYoung = students.find(student => student.age < 16)
console.log(tooYoung)

/*====================================================================================================================*/
console.log('==================================================');

// HOMEWORK PROBLEM 3:

function isAdult(person) {
    return person.age >= 18
}

function isExcellent(student) {
    return student.grade >= 8
}

function isSecondCourse(student) {
    return student.course === 2
}

// Используй эти функции с методами filter и find
const adultStudents = students.filter(isAdult)
console.log(adultStudents);
const firstExcellent2 = students.find(isExcellent)
console.log(firstExcellent2);
const secondCourse2 = students.filter(isSecondCourse)
console.log(secondCourse2);
const firstSecondCourse = students.find(isSecondCourse)
console.log(firstSecondCourse);

/*====================================================================================================================*/
console.log('==================================================');

// HOMEWORK PROBLEM 4:

const colors = ["красный", "синий", "зелёный", "жёлтый", "фиолетовый"]

const evenIndexColors = colors.filter((color, index) => index % 2 === 0)
console.log(evenIndexColors);

const colorAfterIndex2 = colors.find((color, index) => index > 2)
console.log(colorAfterIndex2);