//template strings in ES6/ES2015

let str = 'hello' + ' world';
let str1 = "hello";
let str2 = `hello 
world`;

let name = `Ahmad`;
let bondline = `my name is ${name}`;

let one = 1;
let two = 2;
let sum  = `${one} and ${two} always makes ${one  + two} right ${name}.`;

let tagged = function(strArray, ...vals) {
	console.log(strArray);
	console.log(vals);
}

var tag = tagged`${one} and ${two} always makes ${one  + two} right ${name}.`;

//we can compare for the strings
console.log("\nString Comparison:");
console.log('hello world'.startsWith('hel'));
console.log('hello world'.startsWith('hl'));
console.log('hello world'.endsWith('ld'));
console.log('hello world'.endsWith('hel'));
console.log('hello world'.includes('o w'));
console.log('hello world'.includes('wow'));
console.log(' hello world'.repeat('2'));
console.log(' hello world'.repeat('2'));


console.log(str);
console.log(str1);
console.log(str2);
console.log(bondline);
console.log(sum);
console.log(tagged`${one} and ${two} always makes ${one  + two} right ${name}.`);


let raw = String.raw`Not a newline:\n`;
let notRaw = String`Not a newline:\n`;

console.log(raw);
console.log(notRaw);
