debugger;
// what is debugger. I can step through this line by line
// console.log("HI"+5);
// alert('Hello world!');
// cmd + / 
// javascript does not differntiate between different kinds of numbers such as floats and integers ...
// text
// boolean values: true/false value without quotation
// typeof operator explains what type it is
// console.log(typeof 42);

// let means I am about to create a variable. 
let number_ = 42 + 10;
// let 은 한번만 가능

//  redeclear of the variables
number_ = number_ - 3;
// num /= 3 same manipulate the stored values. 
console.log(number_);


let foo = "5";
number_ += +foo;
console.log(typeof number_);


// What if compare text to number
console.log(number_ === foo);

// parseInt place string into it we convert string into number 
// or we can add plus sign into string. it converts to number.

// Dom manipulation javascript css
// getElementsByTagName p {}
// getElementById  #foo{}
// getElementByClassName .bar{}

// Difference between class and ID
// ID" unique identifier, only once, class can be used multiple times

//Put this on the top of this page, let output = document.getElementById('output').innerHTML = number_;
let output = document.getElementById('output').innerHTML = number_;
// save this variable so I can referencing whenever I need. 