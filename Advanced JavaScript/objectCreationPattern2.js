let classConstructor = function(subject, time, favorite) {
	this.subject = subject;
	this.time = time;
	this.favorite = favorite;

	this.printClass = function() {
		console.log(this.subject + ", " + this.time + ", " + this.favorite);
	};
};

let classMath = new classConstructor("Math", "10:30", "Yes");
let classEng = new classConstructor("English", "9:30", "Yes");
let classIsl = new classConstructor("Math", "8:30", "Yes");

console.log("\nConstructor Pattern");
classMath.printClass();
classEng.printClass();
classIsl.printClass();




let classPrototype = function() {

};

classPrototype.prototype.subject = "Not Selected";
classPrototype.prototype.time = "Undecided";
classPrototype.prototype.favorite = "Not Sure";

classPrototype.prototype.printClass = function() {
	console.log(this.subject + ", " + this.time + ", " + this.favorite);
};

var class1 = new classPrototype();
class1.subject = "Physics";
class1.time = "12";
class1.favorite = "No";

console.log("\nPrototype Pattern");
class1.printClass();







