/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    var slow = head
    var fast = head
    
    while (fast) {
        if (!fast.next) break
        fast = fast.next.next
        slow = slow.next
    }
    return slow;
};