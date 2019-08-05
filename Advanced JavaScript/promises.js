//Promises needs a call back function

let promiseToCleanRoom = new Promise(function(resolve, reject){

	//cleaning the room
	let isClean = true;

	if(isClean) {
		resolve('Clean');
	} else {
		reject('Not Clean');
	}
});

//when this method is (.then) executed it means it is being resolved 
promiseToCleanRoom.then(function(fromResolve) {

	//we can get a response back from promise and upon resolve it will get resolve executed
	console.log('The room is ' + fromResolve);
})
//This is in case of error
.catch(function(fromReject) {
	console.log('The room is ' + fromReject);
});



//One more example based on dependencies
//this is in concurrent
let cleanRoom = function() {
	return new Promise(function(resolve,reject) {
		resolve(' Room-is-cleaned');
	});
};

let removeGarbage = function(message) {
	return new Promise(function(resolve,reject){
		resolve(message + ' Garbage-Removed');
	});
};

let winIceCream = function(message) {
	return new Promise(function(resolve, reject) {
		resolve(message + ' won-Icecream');
	});
};



cleanRoom()
.then(function(result) {
	return removeGarbage(result);
})
.then(function(result){
	return winIceCream(result);
})
.then(function(result){
	console.log('finished' + result);
})
.catch(function(message) {
	console.log("cleaning-is-stopped");
});;


//this is in parallel, it will run them in parallel and get a response and .then()
//function will perform after getting a response
//Promise.all([cleanRoom(), removeGarbage(), winIceCream()]).then(function() {
//	console.log('All finished');
//});

//this is in parallel, it will run them in parallel and one by one and get a response and .then()
//function will perform after getting a response
//Promise.race([cleanRoom(), removeGarbage(), winIceCream()]).then(function() {
//	console.log('One of them is finished');
//});


