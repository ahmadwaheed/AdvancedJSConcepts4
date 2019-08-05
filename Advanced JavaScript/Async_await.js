

//this is same concept as promises but in a different way

console.log('person 1: shows ticket');
console.log('person 2: shows ticket');

//Promise(call back function, time) takes two arguments
const promiseWifeBringingTickets = new Promise((resolve,reject) =>{setTimeout(() => {
	resolve('person 3: shows ticket');  //resolves by bringing ticket.
},5000)
}); 

// Now within then we are going to make one more promise
const getPopcorn = promiseWifeBringingTickets.then((ticket)=>{
	//console.log(`person 3: shows ${ticket}`);
	console.log('Old Way');
	console.log('wife: I have the tics');
	console.log('husband: we should go in');
	console.log('wife: no, I am hungry');
	return new Promise((resolve,reject)=>resolve(`${ticket} and popcorn `));
});

const getButter = getPopcorn.then((ticket)=>{
	//console.log(`person 3: shows ${ticket}`);
	console.log('I got some popcorn')
	console.log('husband: we should go in');
	console.log('wife: no, I need some butter on my popcorn');
	return new Promise((resolve,reject)=>resolve(`${ticket}, popcorn and butter`));
});

getButter.then((t)=> console.log(t));

console.log('person 4: shows ticket');
console.log('person 5: shows ticket');







console.log('/nThis is Async part');

console.log('person 1: shows ticket');
console.log('person 2: shows ticket');

//async always return a promise and await() only works within Async function
const preMovie = async() => {
	const promiseWifeTicks = new Promise((resolve,reject)=> {
			setTimeout(() =>resolve('ticket'),3000);
	});

const getPopcorn = new Promise((resolve,reject)=>resolve(`popcorn`));
//const addButter = new Promise((resolve,reject)=>resolve(`butter`));
const getCandy = new Promise((resolve,reject)=>resolve(`candy`));
const getCoke = new Promise((resolve,reject)=>resolve(`coke`));

//in case if wife doesnt come bqck with ticket
let ticket;

try{
	ticket = await promiseWifeTicks;
} catch(e) {
	ticket = 'sad face';
}

//let ticket = await promiseWifeTicks;
/*

let [coke,candy,popcorn] = await Promise.all([getCoke,getCandy,getPopcorn]);

console.log(`${coke}, ${candy}, ${popcorn}`);

console.log(`wife: I got the ${ticket}`);
console.log('husband: we should now go in');
console.log('wife: no, I am really hungry');

let gotPopcorn = await getPopcorn;

console.log(`I got some ${gotPopcorn}`);
console.log('husband: we should go in');
console.log('wife: no, I need some butter on my popcorn');
//return new Promise((resolve,reject)=>resolve(`${ticket}, popcorn and butter`));

//let gotButter = await addButter;

//console.log(`husband: I got some ${gotButter} on popcorn`);
console.log(`husband: anything else darling?`);
console.log(`wife: lets go we are getting late`);
console.log(`husband: thank you for the reminder`);
*/
 return ticket;
}

preMovie().then((message)=>console.log(`person 3: shows ${message}`));


console.log('person 4: shows ticket');
console.log('person 5: shows ticket');


