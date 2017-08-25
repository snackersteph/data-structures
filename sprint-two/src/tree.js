var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
 
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  this.children.push(newNode);
};


treeMethods.contains = function(target) {
  var results = false;
  if (this.value === target) {
    return true;
  }

  if (this.children) {
    for (var i = 0; i < this.children.length; i++) {
      
      if (this.children[i].contains(target)) {
        results = true;
      }
    }
  }

  return results;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var chip = Tree(0);
chip.addChild(5);


console.log(chip.contains(5));
