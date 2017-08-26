// Instantiate a new graph
var Graph = function() {
  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage[node] = {};
  this.storage[node].edges = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.storage.hasOwnProperty(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var array = this.storage[node].edges;
  
  for (var i = 0; i < array.length; i++) {
    var pointer = this.storage[array[i]].edges.indexOf(node);
    this.storage[array[i]].edges.splice(pointer, 1);     
  }
  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.storage[fromNode] === undefined || this.storage[toNode] === undefined) {
    return false;
  }

  var edgesArray = this.storage[fromNode].edges;  
  var otherEdgesArray = this.storage[toNode].edges;

  if (edgesArray.indexOf(toNode) !== -1 && otherEdgesArray.indexOf(fromNode) !== -1) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].edges.push(Number(toNode));
  this.storage[toNode].edges.push(+fromNode);
  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var firstArray = this.storage[fromNode].edges;
  var pointer = firstArray.indexOf(toNode);
  firstArray.splice(pointer, 1);     
  
  var secondArray = this.storage[toNode].edges;
  var pointer = secondArray.indexOf(fromNode);
  secondArray.splice(pointer, 1);     
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var object = this.storage;
  for (var key in object) {
    cb(key);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var graph = new Graph();
var connectToFive = function(item) {
  graph.addEdge(item, 5);
};
graph.addNode(5);
graph.addNode(2);
graph.addNode(1);
graph.addNode(3);
graph.forEachNode(connectToFive);

console.log(graph.storage);