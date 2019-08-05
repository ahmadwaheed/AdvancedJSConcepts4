//closures are when we use an outer scoped variable into the function
//It is a lexical scoping 
//CLOSURES ARE FUNCTIONS WITH PRESERVED DATA

var passed = 3;

var addTo = function() {
	var inner = 2;
	return passed + inner;
}

console.log(addTo());
//console.dir(addTo);



//Another example
var addToo = function(passed) {
	var add = function(inner) {
		console.log(passed + " " + inner);
		return passed + inner;
	};
	return add;
};

var addThree = new addToo(3); //3 is being passed to outer function
var addFour = new addToo(4);

console.log(addThree(12));  //12 is passing into inner function
console.log(addFour(22));


