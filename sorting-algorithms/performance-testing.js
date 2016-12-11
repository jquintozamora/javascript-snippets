

// Generate 100000 items array (worst case)
console.time("Generating 100000 items array");
var Test1 = [];
for (var i = 100000 ; i > 0 ; i -= 1) {
    Test1.push(i);
}
console.timeEnd("Generating 1000 items array");


// Sort Array using Array.prototype.sort()
console.time("Sorting 100000 items array with Array.prototype.sort");
Test1.slice().sort(function(a,b){return a-b});
console.timeEnd("Sorting 100000 items array with Array.prototype.sort");

// Sort Array using Min-Max-Sort
console.time("Sorting 100000 items array with minMaxSort");
minMaxSort(Test1.slice());
console.timeEnd("Sorting 100000 items array with minMaxSort");

// Sort Array using Min-Max-Sort v2
console.time("Sorting 100000 items array with minMaxSortV2");
minMaxSortV2(Test1.slice());
console.timeEnd("Sorting 100000 items array with minMaxSortV2");

// Sort Array using Min-Max-Sort v2
// console.time("Sorting 100000 items array with QuickSort");
// QuickSort(Test1.slice());
// console.timeEnd("Sorting 100000 items array with QuickSort");
