// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.

var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head;
    for (let i = 0; i < n; i++) {
        fast = fast.next
    }
    if (fast == null) {
        return head.next
    }
    while (fast.next != null) {
        fast = fast.next
        slow= slow.next
    }
    slow.next = slow.next.next
    return head
};