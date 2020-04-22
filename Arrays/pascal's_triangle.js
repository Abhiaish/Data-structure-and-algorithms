// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


// In Pascal's triangle, each number is the sum of the two numbers directly above it.

// Example:

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

var generate = (numRows) => {
    if (numRows === 0) return [];
    if (numRows === 1) return [[1]];
  
    const res = [[1], [1, 1]];
    for (let i = 2; i < numRows; i++) {
      const row = [1];
      for (let j = 1; j < i; j++) {
        row[j] = res[i - 1][j - 1] + res[i - 1][j]
      }
      row.push(1);
      res.push(row);
    }
    return res;   
  };