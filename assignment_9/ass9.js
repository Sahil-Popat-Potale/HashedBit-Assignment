// 1) let, const, var – scope difference
function scopeExample() {
    if (true) {
        var varVariable = "I am var";
        let letVariable = "I am let";
        const constVariable = "I am const";

        console.log("Inside block:");
        console.log(varVariable);
        console.log(letVariable);
        console.log(constVariable);
    }
    console.log("\nOutside block:");
    // var is function-scoped → accessible here
    console.log(varVariable);
    // let and const are block-scoped → not accessible here
    try {
        console.log(letVariable);
    } catch (error) {
        console.log("letVariable is block scoped");
    }

    try {
        console.log(constVariable);
    } catch (error) {
        console.log("constVariable is block scoped");
    }
}

scopeExample();

// 2) Fruits array – return second fruit
const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
function getSecondFruit(arr) { return arr[1]; }
console.log("\nSecond fruit:", getSecondFruit(fruits));

// 3) push() then pop()
function pushThenPop(arr, newElement) {
    arr.push(newElement);
    arr.pop();
    return arr;
}
let sampleArray = ["A", "B", "C"];
console.log("\nPush then Pop:", pushThenPop(sampleArray, "D"));

// 4) map() – square numbers
const numbers = [1, 2, 3, 4, 5];
function squareNumbers(arr) { return arr.map(num => num * num); }
console.log("\nSquared numbers:", squareNumbers(numbers));

// 5) filter() – remove even numbers
function getOddNumbers(arr) { return arr.filter(num => num % 2 !== 0); }
console.log("\nOdd numbers:", getOddNumbers(numbers));

// 6) person object greeting
const person = {
    name: "Rahul",
    age: 25,
    occupation: "Developer"
};
function greetPerson(obj) {
    console.log(`\nHello, my name is ${obj.name}. I am ${obj.age} years old and I work as a ${obj.occupation}.`);
}
greetPerson(person);

// 7) Rectangle area
function calculateArea(rect) { return rect.width * rect.height; }
console.log("\nRectangle Area:", calculateArea({ width: 10, height: 5 }));

// 8) Object.keys()
function getKeys(obj) { return Object.keys(obj); }
const sampleObject = { a: 1, b: 2, c: 3 };
console.log("\nObject Keys:", getKeys(sampleObject));

// 9) Merge two objects using Object.assign()
function mergeObjects(obj1, obj2) { return Object.assign({}, obj1, obj2); }
console.log("\nMerged Object:", mergeObjects({ x: 1 }, { y: 2, z: 3 }));

// 10) reduce() – sum of numbers
function sumArray(arr) { return arr.reduce((total, num) => total + num, 0); }
console.log("\nSum of numbers:", sumArray([10, 20, 30, 40]));
