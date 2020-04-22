// Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]


var searchRange = function(nums, target) {
let result=[-1,-1]
//left
let l=0;
let r=nums.length-1
while(l<r){
    const m=~~((l+r)/2);
    if(nums[m]<target) l=m+1;
    else r=m;
}
if(nums[l]===target) result[0]=l;

//right

l=0;
r= nums.length-1;
while(l<r){
  const m=Math.ceil((l+r)/2);
if(nums[m]>target)r=m-1
else
    l=m;
}
    
  if (nums[r] === target) result[1] = r;
    return result;
};




