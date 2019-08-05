//Recursion

let x = function() {
	x();
};

//using loop
let total = 0;

for(let i=1;i<=3;i++) {
	total += i;
}

console.log("Loop Format")
console.log(total);

//using recursion
let add = function(n) {
	if(n<=0) {
	return 0 ;
    } else  {
    	return n + add(n-1);
    }
};

console.log("\nAdd Function: Recursion");
console.log(add(1322));

let mult = function(a) {
	if(a <= 0) {
		return 1;
	} else {
		return a * mult(a - 1);
	}
}

console.log("\nMult Function: Recursion");
console.log(mult(4));



/*
function(3) {
	return 3 + function(2) {
		return 2 + function(1) {
			return 1 + function(0) {
				return 0;
			}
		}
	}
}
*/

//console.log(add(12));
 //add(3) => 3 + add(2);
 //console.log(add2());

 let third = function() {
 	console.log("This is third function.");
 	//first();
 };


 let second = function() {
 	console.log("This is second function.");
 	third();
 };


 let first = function() {
 	console.log("This is first function.");
 	second();
 };

console.log("\nCalling first function:");
 console.log(first());
 //second();
 //third();






