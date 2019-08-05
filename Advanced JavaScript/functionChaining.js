

//This is an object which behaves like a class
var obj = function() {

	this.i = 0;

	this.add = function(i) {
		this.i += i;
		return this; //we need this for function chaining, because it will return an object
	};

	this.subtract = function(i) {
		this.i -= i;
		return this;  //we need this for function chaining, because it will return an object
	};

	this.print = function() {
		console.log(this.i);
	};
};

var x = new obj();

//x.add(12);
//x.subtract(11);
//x.print();


//we cannot do this just by itself 
x.add(4).subtract(2).print();



//SECOND METHOD
//This is an object which behaves like a class
var obj = function() {

	var i = 0;

	var add = function(j) {
		i += j;
		return this; //we need this for function chaining, because it will return an object
	};

	var subtract = function(j) {
		i -= j;
		return this;  //we need this for function chaining, because it will return an object
	};

	var print = function() {
		console.log(i);
	};
	return {add: add, subtract: subtract, print: print};

};

var x = obj();

//x.add(12);
//x.subtract(11);
//x.print();


//we cannot do this just by itself 
x.add(14).subtract(2).print();


