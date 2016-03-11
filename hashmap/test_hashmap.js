describe('key-deriving function', function(){
	it("returns a key for a given string value", function(){
			
		var item1 = [1,2,3,4]	
		var item2 = "dsadasdas"
		var item3 = 345122
		expect(getKey(item1)).toMatch(/[0-9]+/)
		expect(getKey(item2)).toMatch(/[0-9]+/)
		expect(getKey(item3)).toMatch(/[0-9]+/)
	
	})

})

describe("hashFunction", function(){

	it("computes the hash value based on buckets", function(){
		var buckets = 10
		var first = 3, second = 235, third = 0, fourth = 37	
		expect(computeHash(first)).toBe(3)
		expect(computeHash(second)).toBe(10)
		expect(computeHash(third)).toBe(0)
		expect(computeHash(fourth)).toBe(7)
	   
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

		

})
