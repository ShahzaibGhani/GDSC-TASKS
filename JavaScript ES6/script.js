// Object Destructuring

const student = {
    name: "Shahzaib",
    age: 23,
    major: "CS",
    batch: "2021-25"
}

const {name, age, major, batch} = student;
console.log(name); // Shahzaib

// Spread Operator
// It is mostly used to copy array or objects
const num1 = [1,2,3,4,5];
console.log(...num1); //1 2 3 4 5
const num2 = [...num1, 6,7,8];
console.log(...num2); // 1 2 3 4 5 6 7 8

const object1 = {...student};
console.log(object1);

// Rest Operator
//When spread parameter is used as a parameter in a function, it is called rest operator
const fun1 = (...argument) =>
{
    console.log(argument);
}
fun1(1,2); //[1,2]
fun1("Hello", "World"); // ["Hello", "World"]


const fun2 = (num1, num2, ...rest) =>
{
    console.log(num1); //5
    console.log(num2); //10
    console.log(rest); //[15,20,25,30]
}
fun2(5,10,15,20,25,30);


// Arrow Functions

const printName = (name) => console.log(name);
printName("Shahzaib");


// Nullish Coalescing Operator

// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is 'null', '0' or 'undefined', and otherwise returns its left-hand side operand

console.log(5 ?? 0); // 5
console.log(null ?? "Hello");  // Hello

let num3 = 0 ?? 3;
console.log(num3);  //0


// Optional chaining
// The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.

const father = 
{
    name: "ABC",
    son: {
        name: "DEF",
        son: {
            name: "GHI"
        }
    }
}
// console.log(father.sone.name); // It will throw an error
console.log(father.sone?.name); // undefined


// var vs let vs const 

// var declares globally scoped variables, values can be re-assigned
// let declares blocked scoped variables, values can be re-assigned
// const declares blocked scoped variables, functions. The values of the variables and the defination of functions cannot be re-assign

{
    var a1 = 5;
    let a2 = 5;
}
{
    console.log(a1); // 5
    console.log(a2); // Throws an error
}
const fix = 50;
fix = 25; // Throw an error



