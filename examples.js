// Variables let/const
let a = 5 
let b = a 
b = 5

const name = 'will'

var health = 100

// Numbers 
let x1 = 6;
let x2 = 2;
let x3 = x1 + x2;
let x4 = x1 - x2;
let x5 = x1 * x2;
let x6 = x1 / x2;

function hypotenuse(a,b){  //pythagoras 
    let c = a**2 + b**2 ;
   return Math.sqrt(c);
   }

let psw = prompt ('psw')

if (psw == 701)
alert('yes!');    > ; < ; <=


// Strings 
function length(b){     /// length of a string 
    a = b.length; 
    return a ;
    }

    function greet(name) {
        return 'Hello ' + name + '!';  ///concatenation
      }

// logical Operators 
x = 5 y = 5 
&&	and	(x < 10 && y > 1) //is true	
||	or	(x == 5 || y == 5) //is false	
!	not	!(x == y) //is true	


//conditional statements If/else/if else 
let win = 0;
if (dice === 6) {
  win = 100;
}

let message;
if (amount > 1000) {
  message = 'No payout possible!';
} else {
  message = 'The amount will be paid out!';
}

let message;
if (amount > 1000) {
  message = 'Too high. No payout possible!';
} else if (amount < 10) {
  message = 'Too low. No payout possible!';
} else {
  message = 'The amount will be paid out!';
}


// Switch 
switch (new Date().getDay()) {   /// .getdate gives day of week as interger 
  default:
    text = "Looking forward to the Weekend";
    break;
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
}
// Functions 
function color() {
  return 'red';
}

function gross(net) {
  let vat = 20;
  let tax = net * vat / 100;
  return net + tax;
}


// Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

person.lastName; //Doe



// Arrays 
let names = ["will", "craig", "greg"];
let name = names[0] 
console.log (name) //will 

names[1] = "tye" // changes craig to tye

// for Loops 
function addTo(n) {  
  let sum = 0;
  for (let i = 0; i <= n; i++) {  //three control expressions 1st start of the loop 2nd expression is the loop condition. It is evaluated to true or false before each loop iteration. If this expression evaluates to true, the loop code is executed. If this expression evaluates to false, the loop is terminated and the program execution continues after the loop. The third expression, called the final expression, is executed after each loop iteration. 
        sum = sum + i;
  }
  return sum;  ////first interation i =1 sum =1, second iteration i=2 sum = 3, third iteration i=3 sum 6 
}      

addTo(3) // 1+2+3=6


// while loop
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do-while loop
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);


// null 
let foo = null;
if (foo === null) {
  foo = 1;
}