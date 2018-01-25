let numbers = `17 57 68 36 93 63 18 59 83 42 76 34 75 72 83 62 73 1 52 76 14 60 38 98 25 41 89 4 53 69 66 48 39 11 74 31 16 43 65 88 29 24 90 87 61 47 5 35 85 37 30 19 10 40 92 99 77 96 26 13 6 23 3 2 22 44 7 9 80 50 8 91 49 21 28 27 94 46 78 55 12 86 45 81 32 54 51 67 58 15 20 79 70 95 71 64 33 56 97 84`

let numberArray = numbers.split(" ").map(e => parseInt(e));
console.log(numberArray);

// sum of all elements
var sumOfNumbers = numberArray.reduce((sum, num) => sum += num, 0);

sumOfNumbers

//get largest element
var largestNum = numberArray.reduce((max, num) => (num > max ? num : max) ,0);

largestNum

// filter even and odd numbers
var filteredNumbers = numberArray.filter((e) => (e % 2 == 0) );
var filteredOddNumbers = numberArray.filter((e) => (e % 2 !== 0) );
console.log(filteredNumbers);
console.log(filteredOddNumbers);
