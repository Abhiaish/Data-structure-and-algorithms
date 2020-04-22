// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

var reverseList = function(head) {

let prev=null;
while(head!==null){
    next_node=head.next;
    head.next=prev;
    prev=head;
    head=next_node;
}
    return prev;
};

