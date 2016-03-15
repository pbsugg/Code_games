describe('key-deriving function', function(){
    	beforeEach(function(){
		this.testHashTable = new hashTable(10)	})
	it("returns a key for a given string value", function(){
			
		var item1 = [1,2,3,4]	
		var item2 = "dsadasdas"
		var item3 = 345122
		expect(this.testHashTable.getKey(item1)).toMatch(/[0-9]+/)
		expect(this.testHashTable.getKey(item2)).toMatch(/[0-9]+/)
		expect(this.testHashTable.getKey(item3)).toMatch(/[0-9]+/)
	
	})

})

describe("hashFunction", function(){

    	beforeEach(function(){
		this.testHashTable = new hashTable(10)	
	})
	it("computes the hash value based on buckets", function(){
		var buckets = 10
		var first = 3, second = 235, third = 0, fourth = 37	
		expect(this.testHashTable.hasher(first, buckets)).toBe(3)
		expect(this.testHashTable.hasher(second, buckets)).toBe(5)
		expect(this.testHashTable.hasher(third, buckets)).toBe(0)
		expect(this.testHashTable.hasher(fourth, buckets)).toBe(7)
	   
	})


})


describe("hashTable", function(){
	beforeEach(function(){
	    this.buckets = 10
	    this.testHashTable = new hashTable(this.buckets)
	    this.testHashTable.initTable(this.buckets)
	    this.valuesToAdd = ["bill", "bob", "steve", "jim", 1, 2, 5]

	    //create the interface
	    this.hTInterface = hTInterface(this.testHashTable)
	})

	it("initializes a new hashTable with required buckets", function(){
		expect(this.testHashTable.buckets).toBe(10)
	})

	it("can search for matching keys in the hash", function(){
		expect(this.testHashTable.match(33, 45)).toBe(false)
		expect(this.testHashTable.match(33, 33)).toBe(true)
	})

	it("can report its own size", function(){

		expect(this.testHashTable.size()).toBe(0)
		var firstLL = this.testHashTable.table[0]
		firstLL.addNode(this.valuesToAdd[0])
		expect(this.testHashTable.size()).toBe(1)
		firstLL.addNode(this.valuesToAdd[1])
		firstLL.addNode(this.valuesToAdd[2])
	})

	xit("can get rid of a value", function(){
	
		expect(this.testHashTable.size()).toBe(0)
	
	})



})


describe("hashTableInterface", function(){

	beforeEach(function(){
	    this.buckets = 10
	    this.testHashTable = new hashTable(this.buckets)
	    this.testHashTable.initTable(this.buckets)
	    this.valuesToAdd = ["bill", "bob", "steve", "jim", 1, 2, 5]

	    //create the interface
	    this.hTInterface = new hTInterface(this.testHashTable)
	})
	

	it("returns false if lookup does not find object", function(){
	
	    expect(this.hTInterface.lookUp(this.testHashTable,"DOG")).toBe(false)
	
	})

	it("has a lookup function that returns true if the element is found",function(){
	
	    this.hTInterface.insert(this.testHashTable, this.valuesToAdd[0])
	    expect(this.testHashTable.size()).toBe(1)
            expect(this.hTInterface.lookUp(this.testHashTable, this.valuesToAdd[0])).toBe(true)
	})

	it("can insert a new unique value into the table", function() {

	    expect(this.hTInterface.size(this.testHashTable)).toBe(0)
	    this.hTInterface.insert(this.testHashTable, this.valuesToAdd[0])
	    expect(this.hTInterface.size(this.testHashTable)).toBe(1)
	    expect(this.hTInterface.lookUp(this.testHashTable, this.valuesToAdd[0])).toBe(true)

	})

	it("doesn't insert duplicates--values are unique", function() {

	    expect(this.hTInterface.size(this.testHashTable)).toBe(0)
	    this.hTInterface.insert(this.testHashTable, this.valuesToAdd[0])
	    expect(this.hTInterface.size(this.testHashTable)).toBe(1)
	    this.hTInterface.insert(this.testHashTable, this.valuesToAdd[0])
	    expect(this.testHashTable.size(this.testHashTable)).toBe(1)
	
	})
})
