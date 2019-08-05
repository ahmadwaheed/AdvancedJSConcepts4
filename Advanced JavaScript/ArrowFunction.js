//Fat Arrow function expression
// Arrow function doesnt have its own 'this' and it uses 'this' of its parents

"use strict";  //this is for the compiler 

//this is old way
var getA = function(a) {
	return a;
};

console.log(getA(1));

//Arrow func
var getB = b => b;
console.log(getB(2));


//complex
let square = c => c * c;
console.log(square(3));


let squareAgain = (c) => { return c * c };
console.log(squareAgain(3));

//if we are not passing any arg and instead taking from outside
var d = 4;
let squareOutside = () => { return d*d };
console.log(squareOutside());

//we can use underscore as well
let squareOutside2 = _ => { return d*d };
console.log(squareOutside2());

//Multiple arguments
let mult =(a,b) => { return a*b };
console.log(mult(4,5));


//we can use spread operator on fat arrow function to get scope of variables declared outside.
var x1 = (...n) => {
	console.log(n[0])
};
x1(1,2,3);


/*
var x = function() {
	var that = this;

	this.val = 1;

	setTimeOut(() => {
		this.val++;

	console.log(that.val)
	},1)
};

var xx = new x();
*/
