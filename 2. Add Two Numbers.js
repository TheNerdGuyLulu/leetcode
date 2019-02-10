/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let node = new ListNode(0);
    let p1 = l1;
    let p2 = l2;
    let curr = node;
    let carry = 0;

    while (p1 != null || p2 != null) {
        let x = (p1 != null ? p1.val : 0);
        let z = (p2 != null ? p2.val : 0);
        let value = parseInt(carry + x + z);
        carry = 0;
        carry = parseInt(value / 10);
        curr.next = new ListNode((value % 10));
        curr = curr.next;
        if (p1 != null) p1 = p1.next;
        if (p2 != null) p2 = p2.next;
    }

    if (carry > 0)
        curr.next = new ListNode(carry);

    return node.next;
}
