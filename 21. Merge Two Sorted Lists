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
var mergeTwoLists = function(l1, l2) {
    let numbers = [];
    while (l1 != null) {
        numbers.push(l1.val);
        l1 = l1.next;
    }
    while (l2 != null) {
        numbers.push(l2.val);
        l2 = l2.next;
    }
    numbers.sort((a,b) => {return a - b; });
    let sortedList = null;
    for (let i = 0; i < numbers.length; ++i) {
        if (sortedList == null)
            sortedList = new ListNode(numbers[i]);
        else {
            let current = sortedList;
            while (current.next != null) current = current.next;
            current.next = new ListNode(numbers[i]);
        }
    }
    return sortedList;
};
