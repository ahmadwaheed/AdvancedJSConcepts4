
1. Difference between keyword 'var' and 'let'?
   
   var is there from beginning and let was came in from ES20115/ES6 
   let has a block scope => variable with let will die at the end of the block 
   var has function scope => it will die at the end og the function.
   'var' gets hoisted and 'let' don't at the top of its function

2. Difference between '==' and '==='?

   Both are comaparison operators.
   '==' compares the value
   '===' compares value and type

3. Difference between 'let' and 'const'?
   
   'const' after the first assignment we cannot reassign the value
   'let' we can change the value and type if we want
   const c; is equal to undefined and if we do c = 1; it will be an error
   const c = [1,2]; 
   c.push(3);
   will let us add the value to it. Because it an object we can modify but we cannot reassign

4. Difference between 'null' and 'undefined'?
   
   They both represent empty value. 
   when we declare a variable and dont assign value to it JS will assign it 'undefined'
   'null' is when we do it ourself
   typeof(undefined) => undefined
   typeof(null) => object

5. what is the use of arrow function =>?
   
   const profile = {
   	firstName: '',
   	lastName: '',
   	setName: function(name) {
   		let splitName = function(n) {
   			let nameArray = n.split(' ');
   			this.firstName = nameArray[0];
   			this.lastName = nameArray[1];
   		}
   		splitName(name);
   	}
   }

   profile.setName('john doe');
   console.log(firstName);


   const profile = {
   	firstName: '',
   	lastName: '',
   	setName: function(name) {
   		let splitName = (n) => {  // this is the difference 
   			let nameArray = n.split(' ');
   			this.firstName = nameArray[0];
   			this.lastName = nameArray[1];
   		}
   		splitName(name);
   	}
   }

   profile.setName('john doe');
   console.log(firstName);

6. what is prototypal inheritance?
   
   Every object have a property call prototype and when we make new objects from these
   objects the newly created objects inherits the properties of parents.

   let car = function(model) {
   	this.model = model;
   };

   car.prototype.getModel = function() {
   	return this.model;
   }

   let toyota = new car('toyota');
   console.log(toyota.getModel());

   let nissan = new car('nissan');
   console.log(toyota.getModel());

7. Difference between function declaration and function expression?
   
   function funcD() {
   	console.log('function declaration');
   };


   it has properties as variables because it is saved in a variable
   let funcE = function() {
   	console.log('function expression');
   }

   fundD is available before declaration but funcE is not.
   we cannot pass funcD to another function only funcE because it is a variable

8. What is promises and why we use it?
   
   var p1 = new Promise(function(resolve,reject) {
   	resolve($.ajax('a.json');)
   });

   //This will wait for the promise and after the promise it will perform 
   the .then() part of the promise

   p1.then(function(r){
   	return new Promise()
   }).then(function(result){
   	$("#div1").html(result);
   });

9. what is setTimeout()?
   
   //This makes it asynchronous call which means that in a stack it has to wait

   setTimeout(function() {
   	console.log('a');
   }, 0);

10. what is closure and how to use it?
   
   when a function returns a function the returning function holds its environment

   let obj = function() {
   	let i = 0;

   	return {
   		setI(k) {
   			i = k;
   		},
   		getI() {
   			return i;
   		}
   	}
   };

   let x = obj;
   x.setI(2);
   console.log(x.getI());





