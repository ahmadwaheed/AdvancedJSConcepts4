let mathHomework = function() {
	return new Promise(function(resolve,reject) {
		resolve(' Math-Homework-done ');
	});
};

let EngHomework = function(message) {
	return new Promise(function(resolve,reject) {
		resolve(message + ' English-Homework-done ');
	});
};

let PhyHomework = function(message) {
	return new Promise(function(resolve,reject) {
		resolve(message + ' Physics-Homework-done ');
	});
};

let ChemHomework = function(message) {
	return new Promise(function(resolve,reject) {
		resolve(message + ' Chemistry-Homework-done ');
	});
};

let UrduHomework = function(message) {
	return new Promise(function(resolve,reject) {
		resolve(message + ' Urdu-Homework-done ');
	});
}; 

mathHomework()
.then(function(result) {
	return EngHomework(result);
})
.then(function(result) {
	return PhyHomework(result);
})
.then(function(result) {
	return ChemHomework(result);
})
.then(function(result) {
	return UrduHomework(result);
})
.then(function(result) {
	console.log('All-Done' + result);
})
.catch(function(result) {
	console.log('Need-to-finish');
});



