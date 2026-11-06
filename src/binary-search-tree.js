const { NotImplementedError } = require("../lib");
// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  root() {
    return this.tree ?? null;
  }

  add(data) {
    this.tree ??= { right: null, left: null };
    if (Object.hasOwn(this.tree, "data")) {
      let prev = null;
      let last = this.tree;
      while (last && last.data !== data) {
        prev = last;
        last = data > last.data ? last.right : last.left;
      }
      const node = { data: data, right: null, left: null };
      if (prev.data === data) return;
      prev[data > prev.data ? "right" : "left"] = node;
    } else {
      this.tree["data"] = data;
    }
  }

  find(data) {
    let current = this.root();
    while (current && current.data !== data) {
      current = data > current.data ? current.right : current.left;
    }
    return current;
  }

  has(data) {
    return this.find(data) ? true : false;
  }

  remove(data) {
    const node = this.find(data);
    if (!node) return;
    if (node.right) {
      node.data = node.right.data;
      const left = JSON.parse(JSON.stringify(node.right.left));
      const right = JSON.parse(JSON.stringify(node.right.right));
      const nodeleft = JSON.parse(JSON.stringify(node.left));
      node.right = right;
      node.left = left;
      if (nodeleft) {
        const min = this.min(left);
        const last = this.find(min ?? node.data);
        last.left = nodeleft;
      }
    } else if (node.left) {
      node.data = node.left.data;
      const left = JSON.parse(JSON.stringify(node.left.left));
      const right = JSON.parse(JSON.stringify(node.left.right));
      node.left = left;
      node.right = right;
    } else {
      let parent = this.root();
      while (
        parent?.right?.data !== node.data &&
        parent?.left?.data !== node.data
      ) {
        parent = data > parent.data ? parent.right : parent.left;
      }
      parent.right === node ? (parent.right = null) : (parent.left = null);
    }
  }

  min(node = this.tree) {
    let last = node;
    while (last && last.left) {
      last = last.left;
    }
    return last?.data ?? null;
  }

  max(node = this.tree) {
    let last = node;
    while (last.right) {
      last = last.right;
    }
    return last?.data ?? null;
  }
}

module.exports = {
  BinarySearchTree,
};
