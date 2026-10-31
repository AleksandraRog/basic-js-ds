const { NotImplementedError } = require("../lib");
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  getUnderlyingList() {
    return this.listNode ?? null;
  }

  getLast() {
    let last = this.listNode;
    while (last.next) {
      last = last.next;
    }
    return last;
  }

  enqueue(value) {
    this.listNode ??= { next: null };
    const last = this.getLast();
    if (Object.hasOwn(last, "value")) {
      const node = { value: value, next: null };
      last.next = node;
    } else {
      last["value"] = value;
    }
  }

  dequeue() {
    if (!this.listNode) return undefined;
    const value = this.listNode.value;
    this.listNode = this.listNode.next;
    return value;
  }
}

module.exports = {
  Queue,
};
