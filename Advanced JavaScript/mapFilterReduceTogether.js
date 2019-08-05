//We are using map() filter() and reduce() together.

var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
  }
];

var rebels = pilots.filter(function(pilot) {
  return pilot.faction === "Rebels";
});

var empire = pilots.filter(pilot => pilot.faction === "Empire");

console.log(rebels);
console.log(empire);


var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];


var forceUser = personnel.filter(person => person.isForceUser);
console.log('\nFilter');
console.log(forceUser);

var combiningScore = forceUser.map(score => score.pilotingScore + score.shootingScore);
console.log('\nMap');
console.log(combiningScore);

var totalScores = combiningScore.reduce((accum,score) => accum + score);
console.log('\nReduce');
console.log(totalScores);


//Combining them all together
var mapFilterreduce = personnel
                      .filter(person => person.isForceUser)
                      .map(score => score.pilotingScore + score.shootingScore)
                      .reduce((value, curr) => value + curr);

console.log("\nAltogether");
console.log(mapFilterreduce);

//Map() exercise
// Write a function capitalize that takes a string and uses .map to return the same string in all caps. 
// ex. capitalize('whoop') // => 'WHOOP'
// ex. capitalize('oh hey gurl') // => "OH HEY GURL"
String1 = "oh hey Gurl";

var capitalize = (string) => {
  return string.split(" ").map(word => { return word.split("").map(letter => {
    return letter.toUpperCase(); }).join('')}).join(' ')
}

var capitalize1 = String1.split(" "); //splits this into an array
var capitalize2 = capitalize1.map(string => string.toUpperCase());
var capitalize3 = capitalize2.join(' ');



console.log("\nMap Exercise");
console.log(capitalize(String1));
console.log("\nSmall Capitalize1");
console.log(capitalize1);
console.log("\nUpper Capitalize2");
console.log(capitalize2);
console.log("\nJoin Capitalize3");
console.log(capitalize3);


// Now write a new function called swapCase that takes a string of words and uses .map and your newly written capitalize() 
// function to return a string where every other word is in all caps. 
// Hint: look up Array.prototype.map on MDN and see what arguments the .map callback can take. 
// ex: swapCase('hey gurl, lets javascript together sometime') // => "HEY gurl, LETS javascript TOGETHER sometime"

string2 = "hey gurl lets javascript together sometime";

//cap1 = string2.split(" ");
//cap2 = cap1.map(string => string.toUpperCase());
//cap3 = cap2.join(" ");

const capitalize4 = (string1) => {
return string1.split(" ").map(word => {
return word.split("").map(letter => {
return letter.toUpperCase();
}).join('')
}).join(' ')
}

//const swapCase = (string2) => {
 // return string2.split(" ").map(word,index) => {
  //  return (index % 2 === 0) ? capitalize4 : word }).join('');
//}


console.log("\nCap1");
//console.log(cap1);
console.log("\nCap2");
//console.log(cap2);
console.log("\nCap3");
//console.log(cap3);
console.log("\nCapitalize4");
console.log(capitalize4(string2));


// Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the 
// alphabet by one. Hint: Use Look up the JS functions String.fromCharCode() and String.CharCodeAt() and see if you can use
// Ascii code to acomplish this.
// ex. shiftLetters('hello') // => 'ifmmp'
// ex. (shiftLetters('abcxyz') // => "bcdyz{"

string3 = "This string is going to get decoded";

//const shiftLetters = (string) => {
//  return string.split(" ")
//  .map(word => word.split("")
//  .map(letter => {
//    return String.fromCharCode((letter.CharCodeAt() + 1))
//  }).join('')}).join(' ')}

//var shift4 = string3.split(' ');
//var shift5 = shift4.map(letter => letter.fromCharCode());

console.log('\nShift1');
//console.log(shift1);
//console.log(shift2);

// Write a function that takes a string and returns an object representing the character 
// count for each letter. Use .reduce to build this object. 
// ex. countLetters('abbcccddddeeeee') // => {a:1, b:2, c:3, d:4, e:5}

const countLetters = (string) => {
  return string.split("")
         .reduce((accum,curr) => {
         accum.hasOwnProperty(curr) ? accum[curr]++ : accum[curr] = 1
           return accum
  },{})
}

console.log('\ncountLetters');
console.log(countLetters('abbcccddddeeeee'));


// Write a function that takes a string and a target, and returns true or false if the target is present in the string. Use
// .reduce to acomplish this.
// ex. isPresent('abcd', 'b') // => true
// ex. isPresent('efghi', 'a') // => false

const isPresent = (string, target) => {
  return string.split("")
         .reduce((accum, curr) => curr === target ? accum = false : accum = true); 
    //     {
      //    if(curr === target)
    //        accum = true;
    //      return accum;
    //     },false)
}

console.log('\nisPresent');
console.log(isPresent('dsdaaffdg','a'));

//Map()
var bdays = ['08-14', '10-04', '04-21'];
var bdays2 = bdays.map(date => date.replace('-', '/'));

var arr = [1.5, 2.56, 5.1, 12.33];
var arr2 = arr.map(Math.ceil)

console.log('\nReplace');
console.log(bdays2);

console.log('\nCeil');
console.log(arr2);


//Reduce()
var nums = [1, 2, 3, 4];

var method = nums.reduce(function(prev, currValue, currIndex, fullArray) {
  return prev + currValue;
});

console.log('\nNums');
console.log(method);


//Filter
var nums1 = [-4, 3, 2, -21, 1];

var numFilter = nums1.filter(num => num < 0);
console.log('\nNumFilter');
console.log(numFilter);

var data = [
  {name: 'daniel', age: 45},
  {name: 'john', age: 34},
  {name: 'robert', age: null},
  {name: 'jen', age: undefined},
  {name: null, age: undefined}
];


var dataMod = data.filter(dataa => dataa.name == undefined || dataa.age == undefined ? true: false);
console.log("\nFilter Data");
console.log(dataMod);










