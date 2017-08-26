

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
  var pointerDelete = this.storage[node].edges //3
  // var edgesArray = this.storage[fromNode].edges
  // for (i=0; i < edgesArray.length; i++) {
  //   if (this.storage[fromNode].edges )
  //  //iterate the edgesArray
  // } 

  // if (this.storage[i].edge === pointerDelete) {
  //   this.storage[i].edge = null;
  // } ;

  delete this.storage[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var edgesArray = this.storage[fromNode].edges
  if (edgesArray.indexOf(toNode)) {
    return true;
  }
  var otherEdgesArray = this.storage[toNode].edges
  if (edgesArray.indexOf(fromNode)) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].edges.push(toNode);
  this.storage[toNode].edges.push(toNode)
  
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  this.storage[fromNode].edges = null;
  this.storage[toNode].edges = null;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var graph = new Graph();
graph.addNode(2);
graph.addNode(1);
graph.addNode(3);
graph.addEdge(3, 2);
graph.removeNode(3);

console.log(graph.storage)






