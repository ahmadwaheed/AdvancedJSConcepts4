
let i = [1,2,3,4,5];


//Iterators()
let iterator = i[Symbol.iterator]();

//it will give first value and done property
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());



//Generators()
//it helps build values for iterators to be used
//we can dynamically gets value 
// have to use * and have to use yield
//It returns an array of members 
function *generator() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
};

let iter = generator();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


// Generators with promises
function request(url) {
	return new promise(function(resolve,reject) {
		makeAjaxCall(url, function(err,text) {
			if(err) reject(err);
			else resolve(text);
		});
	});
};

function *generator() {
	yield request('url');
	yield request('url2');
};

