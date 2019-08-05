//Object Creation using
// 1. Constructor Pattern
// 2. Factory Pattern
// 3. Prototype Pattern
// 4. Dynamic Prototype Pattern

//Factory Pattern
var peopleFactory = function(name,age,state) {
	//temp object
	var temp = {}; // var temp = new Object 'samething'
	//var temp = new Object;
	
	//properties of an object
	temp.age = age;
	temp.name = name;
	temp.state = state;

	temp.printPerson = function() {
		console.log(this.name + ", "+ this.age + ", "+ this.state);
	};
	
	return temp;
};

var person1 = peopleFactory('Ahmad', '28', 'CA');
var person2 = peopleFactory('Kim', '27', 'GA');

console.log("\nFactory Pattern");
person1.printPerson();
person2.printPerson();


//Constructor Pattern
var peopleConstructor = function(name,age,state) {
	//temp object
	this.name = name;
	this.age = age;
	this.state = state;

	this.printPerson = function() {
		console.log(this.name + ", " + this.age + ", " + this.state);
	};
};

var person11 = new peopleConstructor('Waheed', '30', 'CA');
var person22 = new peopleConstructor('ngyuen', '32', 'GA');

console.log("\nConstructor Pattern");
person11.printPerson();
person22.printPerson();



//Prototype Pattern
var peopleProto = function() {

};

//prototype have access to properties of an object because it shares the same space
peopleProto.prototype.age = 0;
peopleProto.prototype.name = "no name";
peopleProto.prototype.state = "no state";

peopleProto.prototype.printPerson = function() {
	console.log(this.name + ", " + this.age + ", " + this.state);
};

var person111 = new peopleProto();
person111.name = 'Salimi';
person111.age = 42;
person111.state = 'SC';

var person222 = new peopleProto();
person222.name = 'Ian';
person222.age = 44;
person222.state = 'SC';

console.log("\nPrototype Pattern");
person111.printPerson();
person222.printPerson();
//console.dir(peopleProto);

//we can check for properties
console.log("\nProperties")
console.log('name' in person111);
console.log('age' in person222);
console.log('blab' in person111);
console.log(person111.hasOwnProperty('name'));


//Dynamic Prototype Pattern
var peopleDynamicProto = function(name,age,state) {
	this.age = age;
	this.name = name;
	this.state = state;

	if(typeof this.printPerson !== 'function') {
		peopleDynamicProto.prototype.printPerson = function() {
    	console.log(this.name + ", " + this.age + ", " + this.state);
  };
 }
};

var person1111 = new peopleDynamicProto('chaudhry', 56, 'CA');
var person2222 = new peopleDynamicProto('Angie', 57, 'MA');


console.log("\nDynaimc Prototype Pattern");
person1111.printPerson();
person2222.printPerson();
//console.dir(peopleProto);

//we can check for properties
console.log("\nProperties")
console.log('name' in person1111);
console.log('age' in person2222);
//console.log('blab' in person111);
console.log(person111.hasOwnProperty('name'));



