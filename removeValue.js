/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) return head;
  if (head.val === val) return removeElements(head.next, val);

  let pointer = head;
  while (pointer) {
    if (pointer.next && pointer.next.val === val) {
      pointer.next = pointer.next.next;
    } else {
      pointer = pointer.next;
    }
  }
  return head;
};
