var Stack = function() {
  var obj = {};
  
  obj.storage = {};
  obj.count = 0;

  obj.push = stackMethods.push;
  obj.pop = stackMethods.pop;
  obj.size = stackMethods.size;



  return obj;  
};




var stackMethods = {};

stackMethods.push = function(value) {
  this.count++;
  this.storage[this.count] = value;
}


stackMethods.size = function() {
  return this.count;
}



