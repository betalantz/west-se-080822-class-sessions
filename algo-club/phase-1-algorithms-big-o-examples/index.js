// What is the Big-O of the following algos?

const laundry = ["belt", "blouse", "pants", "shirt", "shorts", "sock", "underwear"];

// O(1) constant
function printFirstItem(items) {
  console.log(items[0]);
}


// O(n) linear
function printAllItems(items) {
  items.forEach((item) => {
    console.log(item);
  });
}
printAllItems(laundry)

// O(n^2) quadratic
function printAllPossibleOrderedPairs(items) {
  items.forEach((firstItem) => {
    items.forEach((secondItem) => {
      console.log(firstItem, secondItem);
    });
  });
}

// Is N the actual input, or *size* of input?

// O(n) linear
function sayHiNTimes(n) {
  for (let i = 0; i < n; i++) {
    console.log("hi");
  }
}

// O(n) linear
// function printAllItems(items) { n = items.length;
//   items.forEach((item) => {
//     console.log(item);
//   });
// }

// Dropping Constants

// O(2n) -> O(n) linear
function printAllItemsTwice(items) {
  items.forEach((item) => {
    console.log(item);
  });

  // Once more, with feeling
  items.forEach((item) => {
    console.log(item);
  });
}

// O(1 + n/2 + 100) -> O(n)
function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  const middleIndex = Math.floor(items.length / 2);
  let index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (let i = 0; i < 100; i++) {
    console.log("hi");
  }
}

// Dropping less significant terms

// O(n + n^2) -> O(n^2) exponential
function printAllNumbersThenAllPairSums(numbers) {
  console.log("these are the numbers:");
  numbers.forEach((number) => {
    console.log(number);
  });

  console.log("and these are their sums:");
  numbers.forEach((firstNumber) => {
    numbers.forEach((secondNumber) => {
      console.log(firstNumber + secondNumber);
    });
  });
}

// Always describe the "worst case"

// O(n)
function contains(haystack, needle) {
  // Does the haystack contain the needle?
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return true;
    }
  }

  return false;
}

// Space complexity

// O(1) constant
function sayHiNTimes(n) {
  for (let i = 0; i < n; i++) {
    console.log("hi");
  }
}

// O(n) linear function
function arrayOfHiNTimes(n) {
  const hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}

// O(1) constant
function getLargestItem(items) {
  let largest = -Number.MAX_VALUE;
  items.forEach((item) => {
    if (item > largest) {
      largest = item;
    }
  });
  return largest;
}
