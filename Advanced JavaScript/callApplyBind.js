//This is Practical Application of Call() Apply() Bind()

let add = function(c,d) {
	console.log(this.a + this.b + c + d);
};

let obj = {
	a: 1,
	b: 2
};

//we can call add() function on object
//we can call call() function on the function and pass object on it and second and so on 
//are 
add.call(obj,3,4);


//we can do not pass any argument and later in the function we can use 'arguments' keyword
//to pass arguments
let argsToArray = function() {
	//console.log(arguments);
	[].slice.call(arguments);
};

console.log(argsToArray(11,22,44,55));



//we can also use Call on base and sub constructors
let mammal = function(legs) {
	this.legs = legs;
};

let cat = function(legs, isDomesticated) {
	mammal.call(this, legs);
	this.isDomesticated = isDomesticated;
};

let lion = new cat(4,false);
console.log(lion);


//Apply()
//we can pass an array as an argument it converts into regular argument
let numArray = [1,2,3,5];

var mini = Math.min(1,2,3,4,5);
var mini2 = Math.min.apply(null,numArray); // this is equivalent to upper and we are 
// not passing any object so thats why passing 'null' and numArray will get converted
//into arguments 
console.log(mini);
console.log(mini2);


//bind()
let button = function(content) {
	this.content = content;
};

button.prototype.click = function() {
	console.log(this.content);
};

let newButton = new button('add');
let looseClick = newButton.click; //this will unbind 
let boundButton = newButton.click.bind(newButton);

console.log(looseClick());
console.log(boundButton());


let myObj = {
	asyncGet(cb) {
		cb();
	},
	parse() {
		console.log('parse called');
	},
	render() {
		//that = this;  //we can do that or use bind()
		this.asyncGet(function() {
			this.parse();
		}.bind(this));
	}
};

console.log(myObj.render());








