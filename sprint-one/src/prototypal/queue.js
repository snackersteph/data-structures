var Queue = function() {
  var obj = Object.create(queueMethods)
  obj.storage = {};
  obj.count = 0; 
  obj.enCount = 0;
  obj.deCount = 0;
  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.enCount] = value
  this.count++;
  this.enCount++;
}



queueMethods.dequeue = function() {
  var output = this.storage[this.deCount];
  delete this.storage[this.deCount];
  this.count--
  this.deCount++;
  return output

}




queueMethods.size = function() {
	if(this.count < 0) {
	  this.count = 0;
	}
   return this.count;
}
