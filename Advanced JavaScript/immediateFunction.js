//self invoked anonymous functions
//This function is best for situations where we dont need to define and 
//invoke at the same time.

//(function(i) {
//	return i + 12;
//}(j));   


//if not returning anything back
!function() {/* code here */} ();
~function() {/* code here */} ();
+function() {/* code here */} ();


var counter = (function() {
	var i = 0;

	return {
		get: function() {
			return i;
		},
		set: function(val) {
			i = val;
		},
		increment: function() {
			i++;
		}
	}
})();

console.log(counter.get());  //0
counter.set(45);
counter.increment();
console.log(counter.get());
