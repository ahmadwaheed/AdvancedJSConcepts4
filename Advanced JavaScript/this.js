//This key word in all contexts
//global and local scope 
//inside the function
//inside the method
//inide the object and => function

//if we are inside an object and 'this' key means this object

// 'this' inside global scope
this.table = 'windon table';

//'this' inside the function
const cleanTable = function(soap) {
	console.log(`cleaning ${this.table} using ${soap}`);
};

this.garage = {
	table: 'garage table',
}

//'this' inside an object
//let johnsRoom = {
//	table: 'johns table',
//};

//'this' inside an inner function
const cleanInnerTable = function(soap) {
	//first solution
	//let that = this; // we can use that inside the inner function and use {that.this}
//	const InnerFunc = function(_soap) {
//	    console.log(`cleaning ${this.table} using ${_soap}`);
 //}
 //second soluton
 //InnerFunc.call(this,soap);

 //third solution using bind()
 //InnerFunc.bind(this)(soap);

 //fourth solution works with => function
 const InnerFunc = (_soap) => {
	    console.log(`cleaning ${this.table} using ${_soap}`);
 }
 InnerFunc(soap)
};

//'this' inside a constructor
let createRoom = function(name) {
	this.table = `${name}s table`
}

createRoom.prototype.cleanTable = function(soap) {
	console.log(`cleaning ${this.table} using ${soap}`);
}

const jillsRoom = new createRoom('jill');
const johnsRoom = new createRoom('john');

jillsRoom.cleanTable('jills soap');
johnsRoom.cleanTable('johns soap');

//'this' inside a class
class createRoomClass {
	constructor(name) {
		this.table = ` this is ${name}s table`
	}

	cleanTable(soap) {
		console.log(`I am cleaning ${this.table} using ${soap}`)
	}
}


//call() is being used to access the table of the function
cleanTable.call(this, 'some soap');
cleanTable.call(this.garage, 'some soap');
cleanTable.call(johnsRoom, 'some soap');


//we are not using 'this' because table over here is in private context
//console.log(johnsRoom.cleanTable());
//console.log(johnsRoom.table);

//'this' inside a method

