/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let current = head;
    let prev = null;
    while(current != null) {
        if (current.next != null && (current.val == current.next.val))
            current.next = current.next.next;
        
    if ((current.next != null && (current.val != current.next.val)) || current.next == null)
        current = current.next;
    }
    
    return head;
};
