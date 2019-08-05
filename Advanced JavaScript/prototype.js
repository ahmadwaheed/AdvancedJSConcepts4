

let car = function(color) {
	this.color = color;
};
 car.prototype.getColor = function() {
//	this.getColor = function() {
		return this.color;
	}

Object.prototype.toString = function() {
	return 'color:${this.color}';
};


let redCar = new car('red');

let blah = {
	color: 'blah'
};

console.log(redCar);
console.log(redCar.toString());
console.log(blah.toString());
