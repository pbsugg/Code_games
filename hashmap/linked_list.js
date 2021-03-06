
/*

LinkedList and ListNode implementations for my hashmap

*/

function listNode(value) {

    this.value = value;
    // 0 = none
    this.next = null

}

function linkedList() {

  this.head = null 
  this.traverseToEnd = function(){
    if (this.head == null){
	return null
    }
    current_node = this.head;
    while (current_node.next){
      current_node = current_node.next;
    }
    return(current_node);
  }
  this.addNode = function(nodeToAdd){
      // deal w/ funky incoming vales re: hash
      // should probably have a more standard answer re: this question
      // what to do if incoming value not a node?
      if (!(nodeToAdd instanceof listNode)){
	  nodeToAdd = new listNode(nodeToAdd)
      }
      if(this.head == null){
	  this.head = nodeToAdd
      }else{
      listEnd = this.traverseToEnd();
      listEnd.next = nodeToAdd;
      return(nodeToAdd);
      } 
  }
  this.getNode = function(value){
    var currentNode = this.head;
    while(currentNode){
	if (currentNode.value == value)	{
  		 return(currentNode)
	}
      currentNode = currentNode.next
    }
    return(null)
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
  
  this.size = function(){
	var size = 0  
	if (this.head){
	    size += 1
	}
	else{
	    return 0
	}
	var currentNode = this.head
 	while(currentNode.next) {
	    size += 1
	    currentNode = currentNode.next
	}
	return(size)
  }

}
