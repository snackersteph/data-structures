var Stack = function() {
  this.storage = {};
  this.count = 0;
};


Stack.prototype.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
};

Stack.prototype.pop = function() {
  var output = this.storage[this.count];
  delete this.storage[this.count];
  this.count--;
  return output;
};


Stack.prototype.size = function() {
  if (this.count < 0) {
    this.count = 0;
  }

  return this.count;
};
