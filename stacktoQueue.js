/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.stack = [];
  this.helperStack = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack.push(x);
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  while(this.stack.length > 0) {
    this.helperStack.push(this.stack.pop());
  }
  let x = this.helperStack.pop();
  while(this.helperStack.length > 0){
    this.stack.push(this.helperStack.pop());
  }
  return x;
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.stack.length > 0) {
    return this.stack[0];
  } else {
    return null;
  }
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 */
var obj = new MyQueue();
obj.push(1);
var param_2 = obj.pop();
var param_3 = obj.peek();
var param_4 = obj.empty();

console.log(param_2, param_3, param_4);
