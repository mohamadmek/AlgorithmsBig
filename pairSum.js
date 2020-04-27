// 1- Given an unsorted array of integers and number n. Find a pair in the array where the sum is equal to n.
// E.g.
// Input:
// arr = [8,7,2,5,3,1]
// n = 10
// Output:
// Pair found at index 0 and 2
// or 
// Pair found at index 1 and 4
arr = [8,7,2,5,3,1];
n= 10;
const pairSum = (n) => {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++){
      if((arr[i] + arr[j]) == n){
        console.log(`Pair found at index ${arr.indexOf(arr[i])} and ${arr.indexOf(arr[j])}`)
        break;
      }
    }
  }
}

pairSum(n);

// Time complexity O(n2)