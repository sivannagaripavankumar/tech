/*
                    declarations

                        let
                        var
                        const

let a =10;
var b = 20;
const c = 30;
d = a+b;
console.log(d);


Operators In JavaScript  
 Category       Operators       
 Arithmetic     +, -, *, /, %, **x + y
 Assignment     =, +=, -=, *=, /=x += 5
 Comparison     ==, ===, !=, !==, >, <x > y
 Logical        &&, ||x && y
Conditional     ? :x > y ? "Yes" : "No" 
type            Typetypeof
                instanceof 





Arithmetic opearators
                    +  Addition
                    -  Subtraction
                    *  Multiplication
                    /  Division
                    % Modulus (Remainder)
                    ** Exponentiation
                    ++ Increment
                    -- Decrement


                    +  Addition 
                   
let a=10;
let b=20;
let c=a+b;
console.log(c);
                    - Subtraction
let a = 10;
let b = 20;
let c = a - b;
console.log(c);
                    *  Multiplication
let a = 10;
let b = 20;
let c = a * b;
console.log(c);

                    /  Division

let a = 10;
let b = 2;
let c = a / b;
console.log(c);

                    % Modulus (Remainder)

let a=100;
let b=2;
let c = a % b;
console.log(c);

                    // Exponentiation

let a=18;
let b=2;
let c = a ** b;
console.log(c);
                    // Increment

let a = 10;
let b = a++;
console.log(a);

                    // Decrement
let c = 13;
let d = c--;
console.log(d);


Assignment Operators
                    = equal to
                    += add and assign
                    -= subtract and assign
                    *= multiply and assign
                    /= divide and assign
                   %= modulus and assign

equal to assignment
 let a = 10;
 let b = 20;
 console.log(a=b);

addition assignment
 
let a = 10;
let b = 20;
console.log(a += b);

subtraction assignment

let a = 10;
let b = 20;
console.log(a -= b);

multiplication assignment

let a = 10;
let b = 20;s
console.log(a *= b);


// Division assignment
let a = 10;
let b = 20;
console.log(a /= b);

// modulus assignment
let a = 10;
let b = 20;
console.log(a %= b);


                    //comparision operators
                    // == equal to
                    // != not equal to
                    // === equal to and data type
                    // !== not equal to and data type
                    // > greater than
                    // < less than
                    // >= greater than or equal to
                    // <= less than or equal to


// equal to

let a = 10;
let b = 20;
console.log(a == b);

// not equal to

let a = 10;
let b = 20;
console.log(a != b);

// equal to and data type
let a = 10;
let b = "10";
console.log(a === b);

// not equal to and data type

let a = 10;
let b = "10";
console.log(a !== b);

// greater than


let a = 10;
let b = 20;
console.log(a > b);

// less than

let a = 10;
let b = 20;
console.log(a < b);

// greater than or equal to

let a = 10;
let b = 20;
console.log(a >= b);

// less than or equal to

let a = 10;
let b = 20;
console.log(a <= b);

                        // logical operators
                        // and && 
                        // or ||
                        // not !
// and &&
let a = true
let b = true
console.log(a && b);

// or ||

let a = true
let b = false
console.log(a || b);

// not !
let a = true
console.log(!a);


                    // ternary operator / conditional
let a = 10;
let b = (a>=10) ? "Yes" : "No";
console.log(b);


                    // type operators
                    // typeof
                    // instanceof

//console.log("typeof  " + typeof 10);
console.log([1,2,3] instanceof Array);

                // functions
                 without arguments and no return value
                 with arguments and no return value
                 without arguments and return value
                 with arguments and return value


// without arguments and no return value
function add() {
    console.log("Hello");
}
add();

// with arguments and no return value
function add(a, b) {
    console.log(a + b);
    }
add(5, 10);

// without arguments and return value
function add() {
    return 10;
    }
    console.log(add());
    // with arguments and return value
function add(a, b) {
    return a + b;
    }
 console.log(add(5, 10));
 // function expression
 function add(a, b) {
    return a + b;
    }
    console.log(add(5, 10));
    // arrow function
    let add = (a, b) => {
        return a + b;
        }
        console.log(add(5, 10));

                    //data types
                1    // primitive data types
                2    // reference/complex data types
1. primitive data types
// number
// string
// boolean
// null
// undefined
// symbol


// number
let num = 10;
console.log(num);

//string 
let str = "Hello";
console.log(str);

// boolean
boolean = true;
console.log(boolean);

//null
let nullVar = null;
console.log(nullVar);

//undefined
let undefinedVar;
console.log(undefinedVar);
 

//2. reference/complex data types
// object
// array
// function

// object 
let obj = {
    name: "John",
    age: 30
    };
    console.log(obj);
// array
let arr = [1, 2, 3, 4, 5];
console.log(arr);
// function
function greet(name) {
    console.log(name);
}
greet("John");



// array declaration 

let n = [1, 2, 3, 4];
console.log(n);
let c = new Array("red", "green", "blue");
console.log(c);
*/
// Adding elements to an array
                //push
                //unshift


// removing elements from an array
                //pop
                //shift       
                
/*
 

num.pop();              //remove end of array
console.log(num);

num.shift();            //remove start of array
console.log(num);
 
  
// modify and access array elements
                        //index
                        //splice
                        //slice
                        
let num = [1, 2, 3, 4];
console.log(num[0]); // access first element by using index 0
console.log(num[1]); // access second element by using index 1

let colors = new Array("red", "green", "blue");

                        // splice
                        // add or remove elements from array
                        
//.splice(start, deletecount, item1,item2,...colors.)
colors.splice(0, 2)
console.log(colors);
colors.splice(1,2,"yellow") // adding of item 
console.log(colors);

//.slice(start, deleteCount, item1,item2,...colors.)
                   //splice


let num1 = [1, 2, 3, 4, 5];
console.log(num1.slice(1, 3)); //extract elements from index 1 to 3
console.log(num1.slice(1)); //extract elements from index 1 to the end
 
        //   Array  search and sort

                    //indexeOf()
                    //includes()
                    //sort
                    //reverse
let colors = ["red", "yellow"];
console.log(colors.indexOf("yellow")); //returns index 

console.log(colors.includes("red"));  //returns a boolean indicating  
let co = ["red", "blue", "yellow"];
console.log(co.sort());         // sort array in ascending order
console.log(co.reverse());   //reverse the array elements

                    // Array iteration methods
                    
                    // forEach()
                    // map()
                    // filter()
                    // reduce
                    // concat()
                    // join()


let arr = [1, 2, 3, 4, 5];
arr.forEach(ar => console.log(ar)); // forEach() method  

let foreach = [1, 2, 3, 4, 5];
let r = foreach.map(fe => fe*fe); // map() method creates a new array   
console.log(r)

let fil = [1, 2, 3, 4, 5];
let f = fil.filter(fe => fe > 3); // filter() method creates a new array
console.log(f)

let red = [1, 2, 3, 4, 5];
let re = red.reduce((acc, current) => acc + current, 0); // reduce
console.log(re)

let con = [1, 2, 3];
let con1 = [6, 7, 8];
let c = con.concat(con1); // concat() method
console.log(c)

let jo = [1, 2, 3];
let j = jo.join("->->->->->->->->"); // join() method
console.log(j)

                // Array destruction
let arr1 = [1, 2, 3, 4, 5];
let [a, b] = arr1; // array destruction
console.log(a);
console.log(b);

 
                // control construct
                // if 
                // else if
                // else
                // switch

                // while
                // do while

                // for
                // for of
                // for in

                // break
                // continue
                
let i = 3;
if (i > 1) {
    console.log("i is greater than 1");  // if statement
}
else if (i == 1) {
    console.log("i is equal to 1");  // else if statement
}
else {
    console.log("i is less than 1"); // else statement
}
let num = 3;
switch(num) {                           // switch statement
    case 1:
        console.log("i is equal to 1");
        break;
    case 2:
        console.log("i is equal to 2");
        break;
    case 3: 
    console.log("i is equal to 3");
    break;
    default:
        console.log("i is not equal to 1, 2 or 3");
}

let j = 1;
while (j <= 5) {                        // while loop
    console.log(j);
    j++;
}

let k = 1;
do {                                   // do while loop
    console.log(k);
    k++;
} 
while (k <= 5);

let m = 4;
for (let n = 1; n <= m; n++) {        // for loop
    console.log(n);
}

let arr = [1, 2, 3, 4, 5];            // for of loop
for (let item of arr) {
    console.log(item);
}
 
let arr = [1, 2, 3, 4, 5];            // for in loop
for (let index in arr) {
    console.log(index, arr[index]);
}

let colors = ["red", "green", "blue"];
colors.forEach(function(color, index) {   // for each loop
    console.log(color, index);
});

 for(let i=1;i<=5;i++) {
    if(i==3) continue          // continue statement
    console.log(i); 
 }

 for(let i=1;i<=5;i++) {
    if(i==3) break          // break statement
    console.log(i);
 }
 
                        // function overloading
function add() {
    if(arguments.length == 1) {
        return arguments[0];
    }
    else if(arguments.length == 2) {
        return arguments[0] + arguments[1];
    }
    else if(arguments.length == 4) {
        return arguments[0] + arguments[1] + arguments[2] + arguments[3];
    }
    else {
        return "Invalid number of arguments";
    }
}

console.log(add(1));
console.log(add(1, 2));
console.log(add(1, 2, 4, 50));

                    // spread operator
function addition(...args) {
    if(args.length == 2) {
        return args[0] + args[1];
    }
    else if(args.length == 3) {
        return args[0] + args[1] + args[2];
    }
    else {
        return "Invalid number of arguments";
    }
}
console.log(addition(1, 2));  
console.log(addition(1, 2, 4));

                         // scope chain
function outer() {
    let x = 10;
    function inner() {
        let y = 20;
        console.log(x); 
        console.log(y);  
    }
    inner();
}
outer();


//combining closure and lexical environment
 

                    // object in js
const car = {
    brand: 'Toyota',
    year: 2015,
    color: 'Blue',
    start: function() {
        console.log('The car is starting.');
    }
}
console.log(car.brand);
console.log(car.year);
console.log(car.color);
console.log(car.start());
                           // class
class Car{
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    start() {
        console.log('The car is starting.');
    }
}
const car = new Car('Toyota', 'Blue')       // object 
console.log(car.name, car.color);
car.start();

                            // inheritance
class Parent {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sayHello() {
        console.log('Hello, my name is ' + this.name + ' and I am ' +
            this.age + ' years old.');
    }
}
class Child extends Parent {
    sayBye() {
        console.log("jnkl; .m");
    }
}
const child = new Child('John', 25);
child.sayHello();
child.sayBye();
 
                        // constructor and super
class Parent1 {
    constructor(name, age) {
        this.name = name
        this.age = age   
    }
    sayBye() {
        console.log('Bye, my name is ' + this.name + ' and I am '
            + this.age + ' years old.');
    }

}
class Child1 extends Parent1 {
    constructor(name, age, grade) {
        super(name, age);
            this.name = name
            this.age = age;
            this.grade = grade
    }
    sayBye1() {
        console.log('Bye, my name is ' + this.name + ' and I am '
            + this.age + ' years old and I am in ' + this.grade);
    }
}

const childd = new Child1('John', 33, 10);
childd.sayBye();
childd.sayBye1();*/