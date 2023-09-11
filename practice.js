a = 10;

// console.log(a);

var a; // hoisting where decleration of var n functions moves to the top of the code (i.e on line 1)

// Note - Variable initializations are not hoisted, only variable declarations are hoisted:

 

 

// ----------------------------------------------------------------

var x = 3;

var y = "3";

// console.log(x + y); // 33 numbers is converted into String (typeOf is String)

// console.log(x - y); // 0 String is converted into Number (typeOf is Number)

// ----------------------------------------------------------------------------------------

 

var a = 10;

var b = "hello";

var c = undefined;

var d = null;

 

// console.log(a||c);  // 10

// console.log(b||a);  // hello

// console.log(c||d);  // null

// console.log(a && c);  // UD

// console.log(a && b);  // hello

// console.log(a && b && c);  // UD

// console.log(a || b || c);  // 10

// console.log(c && d); // UD

 

// in OR operator if first value is truthy then first value is returned else the second value is returned always

// in AND operator if both values are truthy then Second value is returned else the false value is returned(i.e if first is falsy then first and if second is falsy then second)

// ----------------------------------------------------------------------------------------

 

// Static Type lang Vs Dynamic Type Lang.

 

// IN Static Type Lang the type of var is checked at the Run time whereas

// in dynamic type lang the type of var is checked at the compile time of the code.

 

// ----------------------------------------------------------------------------------------

// . What is NaN property in JavaScript?

 

// isNaN("Hello")  // Returns true

// isNaN(345)   // Returns false

// isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number)

// isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number)

// isNaN(false) // Returns false

// isNaN(undefined) // Returns true

 

// ----------------------------------------------------------------------------------------

 

 

// IIFE --> Immediately Invoked Function

 

// (function () {

//     const a = 1;

//     const b = "2";

//     console.log(a + b);

// })();

 

// here the function is run at the time it was defined ,

// here we need not to provide any name to the function

// two parantheseis are used 1st to wrap the function

// and second to invoke the function

 

 

// ----------------------------------------------------------------------------------------

 

// HOF --> higher order functions

 

const arrayOfNumbers = [1, 2, 3, 4];

 

const sum = arrayOfNumbers.reduce((acc, currValue) => {

    return acc + currValue;

});

 

// console.log(sum);

//----------------------------------------------------------------
// This Keyword
// (function() {
//     console.log(this);
// })();


var obj  = {
    name : "saurav" ,
    getName : function(){
        console.log(this.name);
    }
}

var getName = obj.getName;

var obj2 ={
    name : "Rahul",
    getName 
}

// obj2.getName();


//----------------------------------------------------------------
// function related to this key word

//  call() --> through call() we can access methods(functions) of another object to our object wehre we want to use it .
//  here this is pointing to the obj for which we have used the function for.

var obj = {
    name : "saurav",
    age : 21 ,
    getName : function(age){
        console.log(this.name + "and has age " + age);
    }
}

obj2 = {
    name : "deepesh" ,
    age : 25
}

// obj.getName.call(obj2 , obj2.age);


// bind()


var bikeDetails = {
    displayDetails : function(regNumber , brandName){
        console.log(this.name + "and has brand " + brandName + " and has Registration Number as" + regNumber);

    }
}

var person1 = {name:  "Vivek"};
     
var detailsOfPerson1 = bikeDetails.displayDetails.bind(person1, "TS0122", "Bullet");
      
// Binds the displayDetails function to the person1 object
        
      
// detailsOfPerson1();

//Returns Vivek, bike details: TS0122, Bullet



// --------------------------------------------------------------------------------------------
// Closures in JavaScript.

function randomFunc(){
    var obj = {
        name : "saurav" ,
        age : 23
        
    }
        return function(){
           console.log(obj.name + "is a good developer managing to do great at the age of " + obj.age);
        }
}

// here this randomFunc() mainly has two things 1. an object gets initilazed and a function is retuened.
 
clouserFuntion = randomFunc();

//  now here the random function is called amnd the return value is captured in clouserFuntion.
// now the concept of clouser says that it has an ability to remember the var n func that are delcared in the outer scope.

clouserFuntion();

// here the function is called an it has the values that are in the scope of randomFunc .


// --------------------------------------------------------------------------------------------------------------------