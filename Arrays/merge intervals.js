// Given a collection of intervals, merge all overlapping intervals.

// Example 1:

// Input: [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
// Example 2:

// Input: [[1,4],[4,5]]
// Output: [[1,5]]
// Explanation: Intervals [1,4] and [4,5] are considered overlapping.

var merge = function(intervals) {
    if(intervals.length<2) return intervals;
    intervals.sort((a,b) => a[0] - b[0])
    for(let i=0;i<intervals.length;i++){
        current=intervals[i];
        previous=intervals[i-1];
        if(current[0]<=previous[1]){
            intervals[i] = [Math.min(prev[0],curr[0]), Math.max(prev[1],curr[1])]
            intervals.splice(i-1,1);
            i -= 1  // After merge, the arr become shorter
        }
    }
    return intervals
        
    };









