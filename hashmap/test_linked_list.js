

describe("linked list", function() {

  beforeEach(function(){
      
	var node1 = new listNode(1)
 	testLL = new linkedList(node1)
  })

  it("initializes the proper nodes and linked lists", function() {
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
})


