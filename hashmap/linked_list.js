
/*

LinkedList and ListNode implementations for my hashmap

*/

function listNode(value) {

    this.value = value;
    // 0 = none
    this.next = null

}

function linkedList(headNode) {

  this.head = headNode;
  this.traverseToEnd = function(){
    current_node = this.head;
    while (current_node.next){
      current_node = current_node.next;
    }
    return(current_node);
  }
  this.addNode = function(nodeToAdd){
      listEnd = this.traverseToEnd;
      listEnd.next = nodeToAdd;
      return(nodeToAdd);
  }
  this.getNode = function(value){
    currentNode = this.head;
    while(currentNode && currentNode.value != value){
      currentNode = currentNode.next
    }
    return(currentNode)
    // returns null if not in linkedList
  }
  this.deleteNode = function(){

  }

}
