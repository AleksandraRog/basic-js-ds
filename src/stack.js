const { NotImplementedError } = require("../lib");

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  push(value) {
    this.array ??= [];
    this.array.push(value);
  }

  pop() {
    if (!this.array) return undefined;
    const top = this.array.pop();
    if (this.array.length === 0) delete this.array;
    return top;
  }

  peek() {
    return this.array?.at(-1);
  }
}

module.exports = {
  Stack,
};
