// let timeoutID = window.setTimeout(function, milliseconds);
// let timeoutID = setTimeout(function, milliseconds);
// function: the function we are going to run
//milliseconds: the time/delay we want to run this code




let message = () => {
	console.log('greetings from setTimeout');
}

setTimeout(message, 5000); 


//if we need to cancel setTimeout

let tID;

clearTimeout(tID);


console.log('1');

console.log('2');

setTimeout(() => { console.log('3'); }, 0);


console.log('4');

console.log('5');