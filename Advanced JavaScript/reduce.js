

const numbers = [1,2,3,4,5,6,7,8,9,10];

//to take a sum of an array
let sum = 0;

for(let n of numbers)
	sum += n;

console.log(sum);


//reduce() can help reduce the value of whole array into single value
//reduce uses call back function and two arguments. First argument is a callback function
//and second argument is a value of accumulator. 
//we can ignore second argument
const sumReduce = numbers.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
},10);

console.log(sumReduce);


//This is the reduced algorithm of the reduce() 
const sumReduceAlgo = numbers.reduce((start, curr) => start + curr);
console.log(sumReduceAlgo);
