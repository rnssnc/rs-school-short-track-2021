const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.tail = null;
    this.head = null;
    this.length = null;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const node = new ListNode(element);
    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.head.value = element;
      this.tail = node;
    }
    this.tail.value = element;
    this.length++;
  }

  dequeue() {
    const val = this.head.value;
    this.head = this.head.next;
    this.length--;
    return val;
  }
}

module.exports = Queue;
