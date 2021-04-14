// 1. Declare a variable named "euroCities" and assign an array to the variable e.g. ["Paris", "London", "Valletta", "Prague", "Rome"]. Declare another variable and assign the second item of the array as a value.

const euroCities = ["Bilbao", "Hamburg", "London", "Paris", "NYC"];
const rainiestCity = euroCities.slice(1,2);
console.log(euroCities);  
// [ 'Bilbao', 'Hamburg', 'London', 'Paris', 'NYC' ]
console.log(rainiestCity);
// ANSWER: 
// [ 'Hamburg' ]


// 2. Change the first item in the array to "Berlin".

euroCities[0] = "Berlin";
console.log(euroCities);
// ANSWER:
// [ 'Berlin', 'Hamburg', 'London', 'Paris', 'NYC' ]


// 3. Print the length of the array "euroCities".
console.log(euroCities.length);
// ANSWER: it prints 5

// 4. Remove the last item of the array "euroCities". 
euroCities.pop();
// it deletes NYC
console.log(euroCities);
// ANSWER: It prints [ 'Berlin', 'Hamburg', 'London', 'Paris' ]


// 5. Use an array method to add "Budapest" to the euroCities array. 

euroCities.push("Budapest");
console.log(euroCities);
// ANSWER: it prints [ 'Berlin', 'Hamburg', 'London', 'Paris', 'Budapest' ]

// 6. **Bonus**: Remove the second and third items from the euroCities array. 

euroCities.splice(1, 2);
console.log(euroCities);
// ANSWER: it prints [ 'Berlin', 'Paris', 'Budapest' ]

// 7. Create another variable named asianCities and assign an array of at least 5 cities to the variable.

const asianCities = ["Tokio", "Seoul", "Beijing", "Mumbai", "Jakarta"];
console.log(asianCities);
// ANSWER: it prints [ 'Tokio', 'Seoul', 'Beijing', 'Mumbai', 'Jakarta' ]


// 8. **Bonus**: Use an array method to select items 2-4 from the array of asianCities and store this in another variable.  

const lovedAsianCities = asianCities.splice(1,3);
console.log(lovedAsianCities);
// ANSWER: It prints [ 'Seoul', 'Beijing', 'Mumbai' ]


// 9. **Bonus**: Use a method to concat euroCities with asianCities. Store the result in a variable (eg. worldCities).  

const worldCities = euroCities.concat(asianCities);
console.log(worldCities);
// ANSWER: it prints [ 'Berlin', 'Paris', 'Budapest', 'Tokio', 'Jakarta' ]

// 10. Reverse the order of worldCities.

worldCities.reverse();
console.log(worldCities);
// ANSWER: it prints [ 'Jakarta', 'Tokio', 'Budapest', 'Paris', 'Berlin' ]


// 11. **Bonus**: Replace the 3rd item in the array of worldCities with "Toronto". 

worldCities[2] = "Toronto";
console.log(worldCities);
// ANSWER: [ 'Jakarta', 'Tokio', 'Toronto', 'Paris', 'Berlin' ]

// 12. **Bonus**: Remove no elements from the array of worldCities, but insert "Washington" at the 2nd position.

worldCities.splice(1,0, "Washington");
console.log(worldCities);
// ANSWER: it prints ['Jakarta', 'Washington', 'Tokio', 'Toronto', 'Paris', 'Berlin' ]

// 13. **Bonus** Write a program to join all elements of the result (worldCities) into a string. 
// Example: worldCities = ["Berlin", "London", "Bangkok", "Phnom Penh"];
// Expected Outputs: 
// "Berlin , London, Bangkok, Phnom Penh"
// "Berlin+London+Bangkok+Phnom Penh" 


console.log(worldCities.join(" ,"));
// ANSWER: it prints Jakarta ,Washington ,Tokio ,Toronto ,Paris ,Berlin

console.log(worldCities.join("+"));
// ANSWER: it prints: Jakarta+Washington+Tokio+Toronto+Paris+Berlin


// **Bonus**

// 1. Write a program to reverse the string: "Hello World". 

let string = "Hello World";
let newArray = string.split(" ");
string = newArray.reverse();
console.log(string);
// ANSWER 1: it prints "Worls, Hello"

let hey = "hello world";
let saludo = hey.split('');
let reversedSaludo = saludo.reverse();
let joinedLetters = reversedSaludo.join("");
console.log(joinedLetters);

// ANSWER 2: it prints dlrow olleh



// **Extra Practice**

// Print the results to the console.

// 1. Make an array of your siblings' names or your favorite movie characters' names.

const siblings = ["Alejandra", "Monica", "Carlos"];

// 2. Make an array of your parents' names.

const parents = [ " Nieves", "JoseLuis"];
// 3. Combine these two arrays.

const family = parents.concat(siblings);
console.log(family);
// ANSWER: it prints [ ' Nieves', 'JoseLuis', 'Alejandra', 'Monica', 'Carlos' ]

// 4. Add your pets' names.
const pets = ["Negu" , "Zuri", "Gilda"];
let familyAndFurs = family.concat(pets);
console.log(familyAndFurs);
// ANSWER: [
//     ' Nieves',   'JoseLuis',
//     'Alejandra', 'Monica',
//     'Carlos',    'Negu',
//     'Zuri',      'Gilda'
//   ]

// 5. Reverse the order of the array.
familyAndFurs.reverse();
console.log(familyAndFurs);
// ANSWER: It prints [
//     'Gilda',    'Zuri',
//     'Negu',     'Carlos',
//     'Monica',   'Alejandra',
//     'JoseLuis', ' Nieves'
//   ]

// 6. Access one of your parents' names.
// const parent1 = familyAndFurs.slice()
const parent1 = familyAndFurs.splice(6,1);
console.log(parent1);
// ANSWER: [ 'JoseLuis' ]

// // 7. Update the name of one of your parents. 
familyAndFurs.push("MariaNieves");
console.log(familyAndFurs);

// ANSWER: it pritns [
//     'Gilda',
//     'Zuri',
//     'Negu',
//     'Carlos',
//     'Monica',
//     'Alejandra',
//     ' Nieves',
//     'MariaNieves'
//   ]
