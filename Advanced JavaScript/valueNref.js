// Pass by value and pass by reference
//In JS it is always pass by reference

 let a = 1;

 let changeA = (val) = > {
 	val = 2;
 };

 changeA(a);
 console.log(a);

 let b = {num:1};


 let changeB = (val) => {
 	val.num = 3;  //this is called mutation
 }
changeB(b);
console.log(b);