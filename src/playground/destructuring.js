/**
 * Object destructuring
*/

const person = {
  name: 'Joe',
  age: 26,
  location: {
    city: 'London',
    temp: 10
  }
}

/**
 * The below allows you to "destructure" the person and person.location objects.
 * 
 * This allows the usage of the variables name, age, temp, city without having to
 * use person.location.city each time.
 * 
 * name = 'Anonymous' below allows the setting of default value whilst destructuring
*/
const {name = 'Anonymous', age} = person;
const {temp, city} = person.location;

console.log(`${name} is ${age}`);

/**
 * Can also rename variables to whatever
 */
const {temp: temperature} = person.location;

console.log(temperature);

if (city && temp) {
  console.log(`It's ${temp}c in ${city}`)
}

/**
 * Challenge
*/

const book = {
  title: 'Ego is the enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const {name: publisherName = 'Self published'} = book.publisher;

console.log(publisherName);

/**
 * Array destructuring
*/

const address = ['16 Diamond Road', 'Watford', 'Herts', 'WD24 5EW'];

/**
 *  Destructure each element. Note: 1st and last elements are not defined below, denoted by " ," at the start
 *  and a lack of a 4th element
*/
const [, town, county] = address;

console.log(`You are in ${town}, ${county}`);

/**
 * Challenge - Get first and third items through array destructuring 
 */
const item = ['Coffee (hot)', '£1', '£2', '£3'];
const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);