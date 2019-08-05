
var obj = {num: 2};
var obj2 = {num: 5};

var addToThis = function(a,b,c) {
	return this.num + a + b + c;
};

console.log(addToThis.call(obj,12,23,34));


var arr = [32,23,23];
//console.log(addToThis.apply(obj,arr));
console.log(addToThis.apply(obj2,arr));

//bind
var obj3 = {num: 34};
var functionName = function(arg1, arg2, arg3) {

};

functionName.call(obj3, arg1, arg2, arg3);
functionName.apply(obj3 [arg1, arg2, arg3]);

var bound = functionName.bind(obj3);

//it will return a function bound and we have to pass args in it 
bound(arg1, arg2, arg3);

console.log(bound);
console.dir(bound);