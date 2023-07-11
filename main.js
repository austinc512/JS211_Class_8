/*

before adding any of the functions, I'm first creating a "spacer" function that'll run in between each of the function calls

*/

function spacer() {
  console.log(`  
    `);
}

// 1) do...while loop to console.log 1 - 1000

let doWhileCounter = 0;

do {
  doWhileCounter++;
  console.log(doWhileCounter);
} while (doWhileCounter < 100);

spacer();

// 2) Create object

const ob1 = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female",
};

// 3) write a function that log keys of object using Object.keys()

function logKeys(object) {
  // do something
  for (let item of Object.keys(object)) {
    console.log(item);
  }
}

logKeys(ob1);
spacer();

// 4) function that logs keys and values using Object.entries()

const logKeyAndValue = (object) => {
  // do something
  for (let [key, value] of Object.entries(object)) {
    console.log(`key: ${key}
value: ${value}`);
  }
};

logKeyAndValue(ob1);
spacer();

// 5) Create arrayOfPersons with multiple people objects.

const arrayOfPersons = [
  {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female",
  },
  {
    firstName: "John",
    lastName: "Doe",
    birthDate: "Jan 28, 1935",
    gender: "male",
  },
  {
    firstName: "Matt",
    lastName: "Pope",
    birthDate: "Mar 16, 1945",
    gender: "male",
  },
  {
    firstName: "Sarah",
    lastName: "Reginald",
    birthDate: "Dec 24, 1956",
    gender: "female",
  },
  {
    firstName: "Jimmy",
    lastName: "Dean",
    birthDate: "Aug 20, 2005",
    gender: "male",
  },
];

// 6) Create a function that uses a for...of loop and an if statement to console.log the value associated with the key birthDate of each object if the birth year is an odd number.

const oddBirthYear = (arr) => {
  // do something
  for (let person of arr) {
    let year = Number(person.birthDate.slice(-4));
    if (year % 2) {
      console.log(person.birthDate);
    }
  }
};

oddBirthYear(arrayOfPersons);
spacer();

// 7) Use .map() to map over the arrayOfPersons and console.log() their information.

const personMap = arrayOfPersons.map((person) => {
  return `${person.firstName} ${person.lastName}'s birthday is ${person.birthDate}, and is ${person.gender}.`;
});
for (person of personMap) {
  console.log(person);
}
spacer();

// 8) Use .filter() to filter the persons array and console.log only males in the array.

const males = arrayOfPersons.filter((person) => person.gender === "male");
console.log(males);
spacer();

// 9) Create a function that returns true if the value of birthDate is before Jan 1, 1990.

function birthdayFiler(person) {
  const staticDate = new Date("Jan 1, 1990");
  const compareDate = new Date(person.birthDate);
  return staticDate > compareDate;
}

// 10) Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

const bornBefore = arrayOfPersons.filter(birthdayFiler);
console.log(bornBefore);
spacer();

// 11) BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.

// const today = new Date();
// const year = today.getFullYear() - 21;
// const twentyOneYearsAgo = new Date(year, today.getMonth(), today.getDate());

// console.log(twentyOneYearsAgo);

// const newTest = new Date("Aug 20, 2005");
// console.log(newTest);

function isOver21(person) {
  const today = new Date();
  const year = today.getFullYear() - 21;
  const twentyOneYearsAgo = new Date(year, today.getMonth(), today.getDate());
  const inputDate = new Date(person.birthDate);
  return twentyOneYearsAgo > inputDate;
}

// 12) BONUS - .filter() out the people in the array who are younger than 21.

const barHoppers = arrayOfPersons.filter(isOver21);
console.log(barHoppers);
spacer();

/*

Pt. 2 - From Scratch .find() & .findIndex()

Repl link: https://replit.com/join/zlvjqmodwf-austinc512
*/
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);
// console.log(found);
// Expected output: 12
// finds first instance of the output.
function findFromScratch(arr) {
  // traverse input array and find first instance of some condition
  for (let item of arr) {
    if (item > 10) {
      return item;
    }
  }
}
console.log(`find from scratch:`);
console.log(findFromScratch(array1));
// Space: O(1) - no extra resources are used
// Time: O(n)

spacer();

const array2 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
// console.log(array1.findIndex(isLargeNumber));
// Expected output: 3
function findIndexFromScratch(arr) {
  // find first index that satisfies condition
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 13) {
      return i;
    }
  }
  // else
  return -1;
}
// Expected output: 3
console.log("find index from scratch:");
console.log(findIndexFromScratch(array2));
// Space: O(n)
// Time: O(n)
