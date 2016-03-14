

describe("linked list", function() {

  beforeEach(function(){
      
 	this.testLL = new linkedList()
        var node1 = new listNode(1)
      	var node2 = new listNode(2)
	var node3 = new listNode(3)

  })

  it("initializes the proper nodes and linked lists", function() {

	var node1 = new listNode(1)
	this.testLL.head = node1		
	var head = testLL.head
	expect(testLL.head).toBe(head);
	expect(head.value).toBe(1)
  });

  it("can traverse to the end of the list", function() {

        var node1 = new listNode(1)
      	var node2 = new listNode(2)
	var node3 = new listNode(3)
	var newLL = new linkedList(node1)
	expect(newLL.traverseToEnd()).toBe(node1)
	node1.next = node2
	expect(newLL.traverseToEnd()).toBe(node2)
	node2.next = node3
	expect(newLL.traverseToEnd()).toBe(node3)
  })

  it("can add new elements to the list", function(){
 	var node1 = new listNode(1) 
      	var node2 = new listNode(2)
	var node3 = new listNode(3)
	var newLL = new linkedList(node1)
	newLL.addNode(node2)
	expect(newLL.traverseToEnd()).toBe(node2)
	newLL.addNode(node3)
	expect(newLL.traverseToEnd()).toBe(node3)
  })

  it("can fetch a node that exists", function(){
	
      	expect(testLL.getNode(1).value).toBe(1)
 	var node2 = new listNode(2)  
	testLL.addNode(node2)
      	expect(testLL.getNode(2).value).toBe(2)
 	var node3 = new listNode(3)  
	testLL.addNode(node3)
      	expect(testLL.getNode(3).value).toBe(3)
  })

  it("returns null if the node does not exist",function(){
	
      	expect(testLL.getNode(2)).toBe(null)
  })

  it("can delete a node at the end of the chain", function(){
 	
      	var node2 = new listNode(2)
	var node3 = new listNode(3)
	testLL.addNode(node2)
	testLL.addNode(node3)
	expect(testLL.traverseToEnd()).toBe(node3)
	testLL.deleteNode(3)
	expect(testLL.traverseToEnd()).toBe(node2)

  })

  it("can delete in the middle of the chain and link the broken chain", function(){

      	var node2 = new listNode(2)
	var node3 = new listNode(3)
	testLL.addNode(node2)
	testLL.addNode(node3)
	testLL.deleteNode(2)
	var head = testLL.head
	expect(head.next).toBe(node3)
	expect(testLL.traverseToEnd()).toBe(node3)
  })

  it("can delete at the beginning, replace the head, and link the chain", function(){

      	var node2 = new listNode(2)
	var node3 = new listNode(3)
	testLL.addNode(node2)
	testLL.addNode(node3)
	testLL.deleteNode(1)
	var head = testLL.head
	expect(head.value).toBe(2)
	expect(testLL.traverseToEnd()).toBe(node3)
  })

})


