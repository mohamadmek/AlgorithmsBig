// 3- Given a binary array containing 0 and 1, find the maximum length sub-array having equal numbers of 0's and 1's.
// E.g.
// Input = [0,0,1,0,1,0,0]
// Output: Largest subarray is [0,1,0,1]

const arr = [0,0,1,0,1,0,0, 1];
const newArr = [];

for(let i = 0; i < arr.length; i++) {
  if(arr[i] == 1) {
    newArr.push(0);
    newArr.push(arr[i]);
  }
}
console.log(newArr);
