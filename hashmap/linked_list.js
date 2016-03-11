
/*

LinkedList and ListNode implementations for my hashmap

*/

function listNode(value) {

    this.value = value;
    // 0 = none
    this.next = null

}

function linkedList(head) {

  this.head = head;
  this.traverseToEnd = function(){
    current_node = this.head;
    while (current_node.next){
      current_node = current_node.next;
    }
    return(current_node);
  }
  this.addNode = function(nodeToAdd){
      listEnd = this.traverseToEnd();
      listEnd.next = nodeToAdd;
      return(nodeToAdd);
  }
  this.getNode = function(value){
    var currentNode = this.head;
    while(currentNode && currentNode.value != value){
      currentNode = currentNode.next
    }
    return(currentNode)
    // returns null if not in linkedList
  }
  
  this.deleteNode = function(value){

	var currentNode = this.head
	var nextNode = currentNode.next
	if(currentNode.value == value){
	    	// value is at head
		this.head = nextNode 	
		return(this.head)
	}
		
	while(nextNode != null){
		if(nextNode.value == value){
			var newNextNode = nextNode.next
			    if(newNextNode == null){
				// deleting at tail
				return(currentNode.next = null) 
			    }
			    else{
				return(currentNode.next = newNextNode) 
			    }
		}	
		else{
			currentNode = nextNode
			nextNode = nextNode.next
		}
	}
	
  }


}