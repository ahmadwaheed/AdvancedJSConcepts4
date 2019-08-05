//This is example of map() filter() reduce()

//map()
const animals = [{"name": "cat", "size": "small", "weight": 5}, 
                  {"name": "dog", "size": "small", "weight": 10},
                 {"name": "lion", "size": "medium", "weight": 105},
                 {"name": "elephant", "size": "big", "weight": 5000}];

let animals_info = [];

for(let newAnim=0; newAnim < animals.length; newAnim++) {
	animals_info.push(animals[newAnim].name);
}

console.log("For loop Mapping");
console.log(animals_info);
//we can use map() like that too
//let animal_names = animals.map((animal, index, animals) => { return animal.name });
//map(current item, current Index, entire array)
let animalMap = animals.map(anim => anim.name);

console.log("\nMapping");
console.log(animalMap);

const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

let newWord = words.filter(word => word.length > 6);
console.log("\nFilter 2");
console.log(newWord);

//filter()
let animals_small = [];

for(let smallAnim=0; smallAnim < animals.length; smallAnim++) {
	if(animals[smallAnim].size === "medium") {
		animals_small.push(animals[smallAnim])
	};
}

console.log("\nFor loop Filtering");
console.log(animals_small);

//let animalFilter = animals.filter((animal) => {
//	return animal.size === "medium";
//});

let animalFilter = animals.filter(animal => animal.size === "medium");

console.log("\nFiltering");
console.log(animalFilter);


//reduce()
let total_weight = 0;

for(let i = 0;i < animals.length; i++) {
	total_weight += animals[i].weight;
}

console.log("\nFor loop Reduce");
console.log(total_weight);

let animalReduce = animals.reduce((weight, animal) => {
	return weight += animal.weight;
},0);

//let animalReduce = animals.reduce( weight => weight += weight);

console.log("\nReduce");
console.log(animalReduce);


const names = ['muhammad', 'ahmad', 'waheed', 'salimi'];
let newNames = names.reduce((sum,value) => sum + ' ' + value, 'hi');

console.log('\nNames');
console.log(newNames);

var pilots = [{ id: 10,name: "Poe Dameron", years: 14},{id: 2,name: "Temmin 'Snap' Wexley",years: 30},
  {id: 41, name: "Tallissan Lintra", years: 16},{id: 99,name: "Ello Asty",years: 22}];

  var totalYears = pilots.reduce((accumulator, pilot) => accumulator + pilot.years,0);

  console.log('\nTotal Years');
  console.log(totalYears);

  var mostExpPilot = pilots.reduce(function (oldest,pilot) {
  	return (oldest.years || 0) > pilot.years ? oldest : pilot;
  },{});

  console.log('Experienced Pilot');
  console.log(mostExpPilot);

