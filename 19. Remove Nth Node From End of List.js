/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let curr = head, prev = head, i = 1;

    while (curr.next) {
        if (i > n) prev = prev.next;
        ++i;
        curr = curr.next;
    }
    
    if (i === 1 && n === 1)
        return null;
    if (i === n) {
        prev.val = prev.next.val;
        prev.next = prev.next.next;
    } else if (n === 1){
        prev.next = null;
    } else {
        prev.next = prev.next.next;
    }
    return head;
};
