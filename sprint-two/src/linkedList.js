var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.head.next = newNode;
    }
    this.tail = newNode;
  };

  list.removeHead = function() {
    if (!this.head) { return null; }
    // Save the head value to a variable to return
    var val = this.head.value;  //4
    var garbage = this.head;    
  
    // Assign the next node the head property
    if (this.head) {
      
    // Declare the new head
      this.head = this.head.next;
       console.log('head',this.head)
    }
    // Delete the previous head
    delete garbage;
    // Return value of deleted head
    return val;
  };

  list.contains = function(target) {
    // if (this.value === target)
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var ll = LinkedList();
ll.addToTail(4);
console.log(ll);




