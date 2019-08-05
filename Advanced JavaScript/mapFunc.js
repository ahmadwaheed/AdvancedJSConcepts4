//Map() function

const numbers = [1,2,3,4,5,6,7,8,9,10];


//filter function takes in arguments a function which returns the value we can 
//set query
var result = numbers.filter(numResult);
var even = numbers.filter(numEven);



function numResult(val) {
	return val >= 7;
};

function numEven(val) {
	return val % 2 === 0;
};

console.log(result);
console.log(even);


//We can also loop through an array of objects
var myObj = [{age: 24}, {age: 'hello'}, {age: 34}, {age: [35]}];

var myObjFunc = myObj.filter(function(val) {
	return typeof val.age === 'Object';
});

console.log(myObjFunc);
