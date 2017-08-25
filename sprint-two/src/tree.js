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

// treeMethods.contains = function(target) {
//   var output = false;
//   if (this.value === target) {
//     output = true;
//   } 
  
//   if (this.children) {
//     treeMethods.contains(target);
//   } 
//   return output;
// };


treeMethods.contains = function(target) {
  var output = false;
  
  function inner(target) {
    if (this.value === target) {
        output = true;
      } else {
        if (this.children) {
          for (var i = 0; i < this.children.length; i++) {
            console.log(this.children.length);
            inner(this.children[i]);
          }
        }
      }
  inner(target);
  return output;
  };
}

/*
 * Complexity: What is the time complexity of the above functions?
 */

var chip = Tree(0);
chip.addChild(1);
chip.addChild(2);