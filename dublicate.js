// 2- Given a limited range array of size n where the array contains elements between 1 to n-1, with one element repeating, find the duplicate number.
// E.g.
// Input: [1,2,3,4,4]
// Output: 4

arr = [1,2,3,4,4];

const dublicate = (arr) => {
  for(let i = 0; i < arr.length; i++) {
    for(let j = i+1; j < arr.length; j++){
      if((arr[i] == arr[j])){
        console.log(arr[i]);
        break;
      }
    }
  }
}

dublicate(arr);

// Time complexity O(n2)