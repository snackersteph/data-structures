var BinarySearchTree = function(value) {
  var obj = Object.create(littleTree)
  obj.value = value;
  obj.right = null;
  obj.left = null;

  return obj;
};

var littleTree = {}

littleTree.insert = function (num) {
  var newNode = BinarySearchTree(num);

  // check if value is bigger
  // if bigger, value is root.right
  // check if value is smaller
  // if smaller, value is root.left

  if (num > this.value) {
    if (this.right === null) {
      this.right = newNode;
    } else {
      this.right.insert(num);
    } 
  } else {
    if (this.left === null) {
      this.left = newNode;
    } else {
      this.left.insert(num);
    }
  }
}

littleTree.contains = function (num) {
  if (this.value === num) {
    return true;
  }

  if (this.value < num && this.right !== null) {
    return this.right.contains(num);
  } else {
    return false;
  } 
  
  if (this.value > num && this.left !== null) {
    return this.left.contains(num);
  } else {
    return false;
  }
}

littleTree.depthFirstLog = function (cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
}



/*
 * Complexity: What is the time complexity of the above functions?
 */

var array = [];
var func = function(value) { array.push(value); };

var plant = BinarySearchTree(5);
plant.insert(2);
plant.insert(3);
console.log(plant);
console.log(plant.depthFirstLog(func));
