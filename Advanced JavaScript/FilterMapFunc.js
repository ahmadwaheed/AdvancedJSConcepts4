
//The map() method creates a new array with the results of calling 
//a provided function on every element in the calling array.

//The filter() method creates a new array with all elements that pass the 
//test implemented by the provided function.

//The reduce() method applies a function against an accumulator and each element in 
//the array (from left to right) to reduce it to a single value.


//This section is for filter Function
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


const filtered = numbers.filter(n => n >= 4);
const multFilter = numbers.filter(n => n >= 4);
const multMap = multFilter.map(n => n * 3);

// we are using chaining
const addFilter = numbers
.filter(n => {
	if(n<=2 || n>=5) {
	return n + 10; }
})
.map(n2=> n2 + 10);
//.filter(n3 => n3.n2 >= 4);
//const addMap = addFilter.map(n=> n + 10);



console.log("\nFiltered");
console.log(filtered);
console.log('\nMultiplier');
console.log(multMap);
console.log('\nConditional Addition');
console.log(addFilter);

//map() will work with each member individually
const mappingMem = filtered.map(n => '<li>' + n + '</li>');
const mappingJoin = mappingMem.join('');
console.log('\nMapping function:');
console.log(mappingMem);
console.log(mappingJoin);

