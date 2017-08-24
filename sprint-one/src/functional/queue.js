var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var enCount = 0;
  var deqCount = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[enCount] = value;
    enCount++;
    count++;
  };

  someInstance.dequeue = function() {
    var output = storage[deqCount];
    delete storage[deqCount];
    deqCount++;
    count--;
    return output;
  };

  someInstance.size = function() {
    if (count < 0) {
      count = 0;
    }
    return count;
  };
  

  return someInstance;
};
