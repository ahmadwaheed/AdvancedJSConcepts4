// spliting and slicing strings

var str = "hello, world";

var str2 = str.slice(4,8);
console.log(str2);


var str3 = str.slice(4);
console.log(str3);

var tagsComma = "meat, ham, salami, pork";
var tagsSpace = "This is my attempt to understand split function";

var tagComma = tagsComma.split(",");
var tagSpace = tagsSpace.split(" ").join(' ');
var UpperSpace = tagSpace.toUpperCase();
console.log(tagComma);
console.log(tagSpace);
console.log(UpperSpace);