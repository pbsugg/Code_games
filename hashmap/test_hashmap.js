describe('key-deriving function', function(){
    	beforeEach(function(){
		this.testHashTable = new hashTable(10)	
	})
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
	    self.buckets = 10
	    self.testHashTable = new hashTable(buckets)

	
	
	})

	it("initializes a new hashTable with required buckets", function(){
		expect(self.testHashTable.buckets).toBe(10)
	})

	it("can perform a lookup if a current value is in the hash", function(){
		expect(self.testHashTable.match(33, 45)).toBe(false)
		expect(self.testHashTable.match(33, 33)).toBe(true)
	})

})
