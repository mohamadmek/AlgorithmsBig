// 4- Given an array and a positive integer k, find the kth largest element in the array.
// E.g.
// Input:
// arr = [7,4,6,3,9,1]
// k = 2
// Output: 7

arr = [7,4,6,3,9,1];
k=2;
const newArr = arr.sort().reverse();

console.log(newArr[k - 1]);

