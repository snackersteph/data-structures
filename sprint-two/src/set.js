var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  // access the storage array
  // loop through the array
  // if true, return true
  // else return false

  // var results = false;
  //   for ( var i = 0; i < this._storage.length; i++) {
  //     if (this._storage[i] === item) {
  //       results = true;
  //     }
  //   }
  // return results;

  return this._storage.includes(item);
};

setPrototype.remove = function(item) {
  var index = this._storage.indexOf(item);  
  this._storage.splice(index, 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
