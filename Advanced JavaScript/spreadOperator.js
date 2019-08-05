// Spread operators and rest parameters

//when we dont know later use this function how many parameters we are going to pass
//n becomes an array insode the function and ... becomes elements of that array
var x = function(a,b,c, ...n) {
	console.log(n);

	//we can do that too
	//var args = Array.prototype.slice.call(arguments, 0);
	//var args = [].slice.call(arguments, 0);
	//console.log(args);
};

x(1,2,3,4,5,6,7,8,9,10);


var dowhatever = ['have fun', 'have more fun', 'maybe study', 'learn coding', 'celebrate it'];
var life = ['born', 'learn to walk', 'learn js', ...dowhatever, 'go to heaven'];

console.log(life);


//combining array
a = [1,2,3,4,5];
b = [6,7,8,9,10];

a.push(...b);

console.log(a);