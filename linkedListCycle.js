/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let front = head;
  let back = head;
  while (front && front.next) {
    back = back.next;
    front = front.next.next;

    if (back === front) {
      return true;
    }
  }
  return false;
};
