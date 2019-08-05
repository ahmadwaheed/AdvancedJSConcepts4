
var add = function(a) {
	return function(b) {
		return a + b;
	}
};

//a = 5
var addToFive = add(5);

//b = 5 so, a + b = 10
console.log(addToFive(5));

var avg = function(...n) {  //...n means it takes n number of arguments       
	let tot = 0;

	for(let i=0; i<n.length; i++) {
		tot += n[i];
	}
	return tot/n.length;
};

var spiceUp = function(fn,...n) {
	return function(...m) {
		// this will concatenate n with m
		return fn.apply(this, n.concat(m));
	}
};

var doAvg = spiceUp(avg, 1,2,3);
console.log(doAvg(4,5,6));


var sayWhat = function(a) {
	return function(b) {
		return function(c) {
			console.log("Saying " + a + " to " + b + " using " + c)
		}
	}
};

var sayHi = sayWhat('hi');
var sayHiToMe = sayHi('me');
var sayHiToMeUsingNothing = sayHiToMe('nothing');

//this is equivalent
//we can pass these three args 
sayWhat('hello')('Friends')('javaScript');



