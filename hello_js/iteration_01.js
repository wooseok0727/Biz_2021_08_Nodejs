const animals = ["lion", "tiger"];
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

const animals1 = ["lion", "tiger"];
animals1.forEach((animal) => {
  console.log(animal);
});

const animals2 = ["lion", "tiger"];
let result = animals2.map((animal) => {
  console.log(animal);
});
console.log(result);

const animals3 = ["lion", "tiger"];
let result1 = animals3.map((animal) => {
  console.log(animal);
  return "mammal " + animal;
});
console.log(result1);

/**
 * 단순 반복이라면 for( )
 * 배열을 순회하려면 forEach( )
 * 배열을 순회 후 새 배열을 얻고 싶다면 map( )
 */
