// Object ==> Prototype --> methods
//                      --> properties

// function ==> Prototype --> methods
//                        --> properties

// x ==> Prototype --> methods
//                 --> properties


//x will look for methods and properties in the function and if couldnt find it will
//look into the object and if we create an object x1 it will acceess to x,func,obj

//This is exampple of a constructor
var x = function(j) {
	this.i = 0;
	this.j = j;

//	this.getJ = function() {
//		return this.j;
//	};
};

//this is the prototype way
x.prototype.getJ = function() {  //{objectName}.prototype.{methodName}
	return this.j;
};

var x1 = new x(1);
var x2 = new x(2);

//x1 and x2 are two different objects
console.log(x1.getJ());
console.log(x2.getJ());

//Creating subClass (subConstructor)
//overriding in Protptype Chain
//Adding Prototype to Master Object


//Base Class Object -> Sub-class object1 -> Object1
                                      // -> Object2
              //    -> Sub-class object2 -> Object3

//base class              
var job = function() {
	this.pays = true;
};

//job.prototype.print = function() {
//	console.log(this.pays ? 'please hire me' : 'no thank you');
//};

//subclass
var Techjob = function(title, pays) {
	job.call(this);  //this line calls constructor on line 46 and sets up the value
	                 //it inherits properties all methods and functions of job

	this.title = title;
	this.pays = pays;
};

//to inherit all functions from jobs prototype
Techjob.prototype = Object.create(job.prototype);

//sets the constructor
Techjob.prototype.constructor = Techjob;

//Techjob.prototype.print = function() {
//	console.log(this.pays ? this.title + 'Job is great, please hire me' : 'no thank you I am good');
//};

//Now, executing from Master Object. In JS every object comes from Master Object
Object.prototype.print = function() {
	console.log(this.pays ? this.title + ' Master Job is Great' : 'Master Thank you');
};


//creating subclass
var softwarePosition = new Techjob('JS Programmer',true);
var softwarePosition2 = new Techjob('JS Programmer',false);

console.log(softwarePosition.print());
console.log(softwarePosition2.print());




