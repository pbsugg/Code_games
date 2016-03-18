describe("quickSort an array of numbers", function(){

    	beforeEach(function(){
	
		this.comparison_basis = function compareNumbers(a,b){                            
			return a - b	
		}	
	})

	it("can deal with arrays where there are no repeating values", function(){
		var test_array = [5, 29, 100, 0, 15, 76, 3000, 12, 75, 800, 1021, 18]	
		quickSort(test_array, 0, (test_array.length - 1), comparisonOperator)	
		expect().toEqual(test_array.sort(this.comparison_basis))
	})

	it("can deal with duplicate values", function(){
		var test_array = [5, 100, 100, 0, 15, 76, 3000, 12, 75, 75, 1021, 18, 76]	
	
	
		expect(quickSort(test_array)).toEqual(test_array.sort(this.comparison_basis))
	})

	it("can deal with a very large number of values", function(){
		var test_array = []
	    	for(var i = 0; i <= 10000; i++){
		// Generate value between 0 and 1000: 10,000 times
	   		test_array[i] = Math.floor(Math.random() * 1000)
	    	}
		expect(quickSort(test_array)).toEqual(test_array.sort(this.comparison_basis))

	})




})
