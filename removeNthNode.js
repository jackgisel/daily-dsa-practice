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
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0, head);
  let front = dummy;
  let back = dummy;

  while (n > 0) {
    front = front.next;
    n--;
  }

  while (front.next) {
    front = front.next;
    back = back.next;
  }

  back.next = back.next.next;
  return dummy.next;
};
