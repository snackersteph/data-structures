var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj.storage = {};
  obj.count = 0;
  obj.enCount = 0;
  obj.deCount = 0;
  
  obj.enqueue = queueMethods.enqueue; 
  obj.dequeue = queueMethods.dequeue;
  obj.size = queueMethods.size;

   
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.enCount] = value;
  this.enCount++;
  this.count++;
};

queueMethods.dequeue = function () {
  var output = this.storage[this.deCount];
  delete this.storage[this.deCount];
  this.deCount++;
  this.count--;
  return output;
};

queueMethods.size = function () {
  if (this.count < 0) {
    this.count = 0;
  }
  return this.count;
};


