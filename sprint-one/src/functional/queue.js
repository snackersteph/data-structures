var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // var count = 0;
  // var enCount = 0;
  // var deqCount = 0;

  // --> Refactored Code
  var start = 0;
  var end = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // storage[enCount] = value;
    // enCount++;
    // count++;

    // --> Refactored Code
    storage[end++] = value;
  };

  someInstance.dequeue = function() {
    // var output = storage[deqCount];
    // delete storage[deqCount];
    // deqCount++;
    // count--;
    // return output;

    // --> Refactored Code
    var result = storage[start];
    delete storage[start];

    someInstance.size() && start++;

    return result;
  };

  someInstance.size = function() {
    // if (count < 0) {
    //   count = 0;
    // }
    // return count;

    // --> Refactored Code
    return end - start;
  };
  

  return someInstance;
};
