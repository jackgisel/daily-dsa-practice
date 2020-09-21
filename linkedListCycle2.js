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

function hasCycle(head) {
  let front = head;
  let back = head;
  while (front && front.next) {
    back = back.next;
    front = front.next.next;
    if (back === front) break;
  }
  return front;
}

var detectCycle = function (head) {
  let back = head;
  let front = hasCycle(head);

  if (front === null || front.next === null) return null;

  while (back !== front) {
    front = front.next;
    back = back.next;
  }

  return back;
};
