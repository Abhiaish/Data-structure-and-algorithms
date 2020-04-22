// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

var mergeTwoLists = function(l1, l2){
    let head=new ListNode(null)
    let current = head;

while(l1!== null && l2!==null ){
    if(l1.val>l2.val){
        current.next=l2;
        l2=l2.next;
    }else{
        current.next=l1;
        l1=l1.next;
    }
    current=current.next;
}
current.next=l1||l2;
return head.next;
}