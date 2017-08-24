var Queue = function() {
  this.storage = {};
  this.count = 0;
  this.enCount = 0;
  this.deCount = 0;
};


Queue.prototype.enqueue = function(value) {
  this.storage[this.enCount] = value
  this.count++;
  this.enCount++;
}



Queue.prototype.dequeue = function() {
  var output = this.storage[this.deCount];
  delete this.storage[this.deCount];
  this.count--
  this.deCount++;
  return output

}


Queue.prototype.size = function() {
	if(this.count < 0) {
	  this.count = 0;
	}
   return this.count;
}
