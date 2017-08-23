var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(Stack.prototype);

  obj.count = 0;
  obj.storage = {};

  return obj;
};

var stackMethods = {};

Stack.prototype.push = function (value) {
  this.count ++;
  this.storage[this.count] = value;
};

Stack.prototype.pop = function () {
  var output = this.storage[this.count];
  delete this.storage[this.count];
  this.count --;
  return output;
};

Stack.prototype.size = function () {
  if (this.count < 0) {
    this.count = 0;
  }
  return this.count;
};



