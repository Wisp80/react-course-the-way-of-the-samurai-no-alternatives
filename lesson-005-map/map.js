// EXAMPLE 1:

const numbers01 = [1, 2, 3, 4, 5];

const newArray = numbers01.map( (number) => {
    return {age: number};
} );

console.log(newArray.length);
console.log(newArray);

/*====================================================================================================================*/
console.log('==================================================');

// EXAMPLE 2:

const words = ['hello', 'world'];

const wordsInfo = words.map( (word, index, array) => {
    return {
        orderNumber: index + 1,
        lettersCount: word.length
    };
});

console.log(wordsInfo);

/*====================================================================================================================*/
console.log('==================================================');

// HOMEWORK PROBLEM 1:

const numbers02 = [1, 5, 10, 15, 20];
const newNumbers02 = numbers02.map( (number) => {
    return number + 10;
});

console.log(newNumbers02);

/*====================================================================================================================*/
console.log('==================================================');

// HOMEWORK PROBLEM 2:

const names = ["Alice", "Bob", "Charlie", "Diana"];
const nameInfo = names.map( (name) => {
    return {name: name, length: name.length};
});

console.log(nameInfo);

/*====================================================================================================================*/
console.log('==================================================');

// HOMEWORK PROBLEM 3:

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 80 },
];

const productsWithFinalPrice = products.map( (product) => {
    return {
        name: product.name,
        price: product.price,
        finalPrice: product.price - product.price * 0.15,
    };
});

console.log(productsWithFinalPrice);

/*====================================================================================================================*/
console.log('==================================================');

// HOMEWORK PROBLEM 4:

const employees = [
    { name: "Alice", salary: 50000, experience: 3 },
    { name: "Bob", salary: 60000, experience: 5 },
    { name: "Charlie", salary: 45000, experience: 2 },
];

const employeesWithTotal = employees.map( (employee) => {
    return {
        name: employee.name,
        salary: employee.salary,
        experience: employee.experience,
        totalSalary: employee.salary + employee.experience * 0.05 * employee.salary
    };
});

console.log(employeesWithTotal);