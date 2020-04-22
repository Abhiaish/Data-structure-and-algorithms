// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true

var isPalindrome = function(head) {
let arr=[];
while(head!==null){
    arr.push(head);
    head=head.next;
}
if(arr.length===1) return true;

let reversed=arr.reverse();
for(let i=0;i<arr.length;i++){
    if(arr[i]!==reversed[arr.length-i-1]){
        return false;
    }

}
return true;

};
