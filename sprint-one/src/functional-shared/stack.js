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
};

stackMethods.pop = function() {
  var output = this.storage[this.count];
  delete this.storage[this.count];
  this.count--;
  return output;
};

stackMethods.size = function() {
  if (this.count < 0) {
    this.count = 0;
  }
  return this.count;
};





// var Stack = function() {
//   var someInstance = {};

//   // Use an object with numeric keys to store values
//   var storage = {};
//   var count = 0;
//   // Implement the methods below
//   someInstance.push = function(value) {
//     count ++;
//     storage[count] = value;
//   };

//   someInstance.pop = function() {
//     var output = storage[count];
//     delete storage[count];
//     count --;
//     return output;
//   };

//   someInstance.size = function() {
//     if (count < 0) {
//       count = 0;
//     }
//     return count;
//   };

//   return someInstance;
// };




