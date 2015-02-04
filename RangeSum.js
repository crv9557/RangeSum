// Connor Ring RangeSum Code for Ch. 4
// February 3rd, 2015
// RangeSum.js

// The program is supposed to add elements in an array and send them out to the console.

// Setup the array for start and end
function range (start, end) {
  var array = [];
  for (var i = start; i <= end; i++)
	array.push(i);
  return array;
}

// Sum function will take numbers in array and add them together 
function sum(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++)
      total += array[i];
    return total;
}

console.log(sum(range(1, 10)));
// -> 55
console.log(range(5, 2, -1));
// -> [5, 4, 3, 2]
