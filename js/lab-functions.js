// 1.
function maxOfTwoNumbers(x, y) {
  return x >= y ? x : y;
}

console.log('1. maxOfTwoNumbers(3,5): ' + maxOfTwoNumbers(3,5));

// 2.
var maxOfThree = function(a, b, c) {
  if(a >= b && a >= c) {
    return a;
  }
  else if(b >= a && b >= c) {
    return b;
  }
  else {
    return c;
  }
}

console.log('2. maxOfThree(3, 60, 10): ' + maxOfThree(3, 60, 10));

// 3.
function isCharAVowel(charInput) {
  var vowels = ["a", "e", "i", "o", "u"];
  var character = charInput.toLowerCase();
  if(vowels.indexOf(character) === -1){
    return false;
  }
  else {
    return true;
  }
}

console.log('3. isCharAVowel("A"): ' + isCharAVowel("A"));

// 4.
var sumArray = function(numArr) {
  var sum = 0;
  for(var i = 0; i < numArr.length; i++) {
      sum += numArr[i];
  }
  return sum;
}

console.log('4. sumArray([4, 5, 6]): ' + sumArray([4, 5, 6]));

// 5.
function multiplyArray(numArr) {
  var product = 1;
  for(i = 0; i < numArr.length; i++) {
    product *= numArr[i];
  }
  return product;
}

console.log('5. multiplyArray([4, 5, 6]): ' + multiplyArray([4, 5, 6]));

// 6.
var numArgs = function() {
  return arguments.length;
}

console.log('6. numArgs(1, "2", "f", 15, 24, "g"): ' + numArgs(1, "2", "f", 15, 24, "g"));

// 7.
function reverseString(string) {
  var array = string.split("");
  var newArray = array.reverse();
  return newArray.join("");
}

console.log('7. reverseString("happy"): ' + reverseString("happy"));

// 7. alternative coding
function reverseStringAlt(string) {
  return string.split("").reverse().join("");
}

console.log('alternative coding string.split("").reverse().join("") - reverseStringAlt("Amazed"): ' + reverseStringAlt("Amazed"));

// 8.
var longestWordLength = function(textArray) {
  letterCounts = [];
  for(var i = 0; i < textArray.length; i += 1) {
  	letterCounts.push(textArray[i].split("").length)
  }
  for(var i = 0; i < letterCounts.length; i += 1) {
	   biggest = 0;
	    if(letterCounts[i] >= biggest) {
		    biggest = letterCounts[i];
	    }
	    else {
		    biggest += 0;
      }
  }
  return biggest;
}

console.log('8. longestWordLength(["happy", "birthday", "to", "you", "Ludwig van Beethoven": ' + longestWordLength(["happy", "birthday", "to", "you", "Ludwig van Beethoven"]));
