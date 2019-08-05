//this method assigns the functions (prpperties) of one ojbect to another object

let toyota = {
	drive() {
		return 'driving toyota';
	},
	break() {
		return 'breaking toyota';
	}
};

let camry = {
	wifi() {
		return 'using wifi';
	},
	drive() {
		return 'driving camry';
	}
};

//Now we are going to copy the properties of toyota into camry
//Object.assign(camry,toyota);
Object.assign(toyota,camry);

//we can copy all properties into this empty object
let copyToyota = Object.assing({}, toyota);

console.dir(copyToyota);

//console.dir(camry);
//console.log(camry.drive());


//These two ideas are same for constructoe
let c1 = function(x,y,z) {
	this.x = x;
	this.y = y;
	this.z = z;
};

let c1 = function(x,y,z) {
	Object.assign(this, {x,y,z});
};

