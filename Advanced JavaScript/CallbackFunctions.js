//High order functions
//Callback functions are when er call a function within a function and execute it 

let x = function() {
	console.log("I am called from inside the function")
};

let y = function() {
	console.log("Do something");
	//callback();
}

y(x);


//Another Example

let add = function(a,b) {
	return a + b;
};

let multiply = function(a,b) {
	return a * b;
};

let calc = function(num1,num2,callback) {
	if(typeof callback === 'function') {
		return callback(num1,num2);
	}
};

console.log(calc(2,3, add));

console.log(calc(2,3, function(a,b) { 
	return a - b; 
}));


//A practical example
var myArr = [{num: 5, str: 'apple'}, {num: 7, str: 'cabbage'}, {num:1, str: 'ban'}];

myArr.sort(function(val1,val2) {
	if(val1.num < val2.num) {
		return -1;
	} else {
		return 1;
	}
});

console.log(myArr);










