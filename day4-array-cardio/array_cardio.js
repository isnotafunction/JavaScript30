const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inv = inventors.filter(x => x.year<1600 && x.year>=1500);
console.table(inv);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const names=inventors.map(x => x.first+" "+x.last);
  console.log(names)
//or:
var name=inventors.map(x => `${x.first} ${x.last}`);
console.log(name)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sorted=inventors.sort((a, b) => a.year-b.year);
//or
const ordered=inventors.sort((a,b)=>a.year>b.year ? 1 : -1);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const lifespan=inventors.reduce(function(total, inventor){
  return total+(inventor.passed-inventor.year)
},0)//we need this 0 so that accumulator starts as 0 and not as age of the first inventor

// 5. Sort the inventors by years lived
const life = inventors.sort(function(a,b){
  return (a.passed-a.year)>(b.passed-b.lived)? -1 : 1;
})

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
var container = document.querySelector(".mv-category");//to select the container
var links= Array.from(container.querySelectorAll("a"));//if we don't transform
//the node list into an Array, we won't be able to use map()
links.map(function(x){return x.textContent})
     .filter(function(x){return x.includes("de")});

// 7. sort Exercise
// Sort the people alphabetically by last name
var alpha = people.sort(function(lastOne, nextOne){
  var [aLast, aFirst] = lastOne.split(", ");//instead of creating an array we are storing it in their own variables straight away
  var [bLast, bFirst] = nextOne.split(", ");
  return aLast>bLast? 1: -1;
})

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transport = data.reduce(function(obj, item){
  if(!obj[item]){
    obj[item]=0;
  }
  obj[item]++
  return obj
},{})
