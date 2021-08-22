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



// NEW ANSWER


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {    
    let sumL = new ListNode(), head = sumL, carry = 0;
        
    while (true) {
        let l1Val = 0, l2Val = 0;
        if (l1) {l1Val = l1.val; l1 = l1.next;}
        if (l2) {l2Val = l2.val; l2 = l2.next;}
        let sum = l1Val + l2Val + carry;
        carry = 0;
        carry = Math.floor(sum / 10); 
        head.val = sum % 10;
        if (l1 === null && l2 === null && carry === 0)
            break;
        head = head.next = new ListNode();
       
    }
    return sumL;
};
