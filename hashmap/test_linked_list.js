

describe("linked list", function() {

  beforeEach(function(){
      
 	this.testLL = new linkedList()
        this.node1 = new listNode(1)
      	this.node2 = new listNode(2)
	this.node3 = new listNode(3)
	this.testLL.head = this.node1		
  })

  it("initializes the proper nodes and linked lists", function() {

	expect(this.testLL.head).toBe(this.node1);
	var head = this.testLL.head
	expect(head.value).toBe(1)
  });

  it("returns null on the traverse if linked list is empty", function(){

	this.testLL.head = null
	expect(this.testLL.traverseToEnd()).toBe(null)
  })
  
  it("can traverse to the end of the list", function() {

	expect(this.testLL.traverseToEnd()).toBe(this.node1)
	this.node1.next = this.node2
	expect(this.testLL.traverseToEnd()).toBe(this.node2)
	this.node2.next = this.node3
	expect(this.testLL.traverseToEnd()).toBe(this.node3)
  })

  it("can add new elements to the list", function(){
	this.testLL.addNode(this.node2)
	expect(this.testLL.traverseToEnd()).toBe(this.node2)
	this.testLL.addNode(this.node3)
	expect(this.testLL.traverseToEnd()).toBe(this.node3)
  })

  it("can fetch a node that exists", function(){
	
      	expect(this.testLL.getNode(1).value).toBe(1)
	this.testLL.addNode(this.node2)
      	expect(this.testLL.getNode(2).value).toBe(2)
	this.testLL.addNode(this.node3)
      	expect(this.testLL.getNode(3).value).toBe(3)
  })

  it("returns null if the node does not exist",function(){
	
      	expect(this.testLL.getNode(2)).toBe(null)
  })

  it("can delete a node at the end of the chain", function(){
 	
	this.testLL.addNode(this.node2)
	this.testLL.addNode(this.node3)
	expect(this.testLL.traverseToEnd()).toBe(this.node3)
	this.testLL.deleteNode(3)
	expect(this.testLL.traverseToEnd()).toBe(this.node2)

  })

  it("can delete in the middle of the chain and link the broken chain", function(){

	this.testLL.addNode(this.node2)
	this.testLL.addNode(this.node3)
	this.testLL.deleteNode(2)
	var head = this.testLL.head
	expect(head.next).toBe(this.node3)
	expect(this.testLL.traverseToEnd()).toBe(this.node3)
  })

  it("can delete at the beginning, replace the head, and link the chain", function(){

	this.testLL.addNode(this.node2)
	this.testLL.addNode(this.node3)
	this.testLL.deleteNode(1)
	var head = this.testLL.head
	expect(head.value).toBe(2)
	expect(this.testLL.traverseToEnd()).toBe(this.node3)
  })

  it("can measure correct size on a list of 0, 1 or 1+ size", function(){
	  
        
	expect(this.testLL.size()).toBe(1)
	this.testLL.addNode(this.node2)
	expect(this.testLL.size()).toBe(2)
	this.testLL.addNode(this.node3)
	expect(this.testLL.size()).toBe(3)
	this.testLL.head = null
	expect(this.testLL.size()).toBe(0)
  })

})


