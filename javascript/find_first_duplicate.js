function findFirstDuplicate(arr) {
  // Given an Array, find the first duplicate value that occurs. If there are no duplicates, return -1.
  // loop through array and compare current and next values of array
  // if any values in array are equal to other values, return -1
  // if not, return VALUE of FIRST element(s)
  // must be sequential...
  
  for( let i=0; i < arr.length ; i++) {
    if(arr[i] === arr[i+1]) {
      return arr[i]
    } 
  }

  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 7");
  console.log("=>", findFirstDuplicate([7, 7, 2, 1, 3, 7, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
