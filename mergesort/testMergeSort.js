describe("mergeSort an array of numbers", function(){

    	beforeEach(function(){
	
		this.comparison_basis = function compareNumbers(a,b){                            
			return a - b	
		}	
	})
	//have to structure tests where I duplicate array and then compare and
	//(destructively modified) original because mergeSort does not return
	//array
	it("can deal with arrays where there are no repeating values", function(){
		var test_array = [5, 29, 100, 0, 15, 76, 3000, 12, 75, 800, 1021, 18]	
		var arrayDuplicate = []
		for(var i = 0; i < test_array.length; i++){
			arrayDuplicate[i] = test_array[i];
		}
		mergeSort(test_array, 0, (test_array.length - 1), comparisonOperator)	
		console.log(test_array)
		var sortedDuplicate = arrayDuplicate.sort(this.comparison_basis) 
		console.log(sortedDuplicate)
		console.log(test_array)

		expect(test_array).toEqual(sortedDuplicate)
	})

	it("can deal with duplicate values", function(){
		var test_array = [5, 100, 100, 0, 15, 76, 3000, 12, 75, 75, 1021, 18, 76]	
		var arrayDuplicate = test_array
		mergeSort(test_array, 0, (test_array.length - 1), comparisonOperator)	
	
		expect(test_array).toEqual(arrayDuplicate.sort(this.comparison_basis))
	
	})

	it("can deal with a very large number of values", function(){
		var test_array = []
	    	for(var i = 0; i <= 10000; i++){
		// Generate value between 0 and 1000: 10,000 times
	   		test_array[i] = Math.floor(Math.random() * 1000)
	    	}

		var arrayDuplicate = test_array
		mergeSort(test_array, 0, (test_array.length - 1), comparisonOperator)	

		expect(test_array).toEqual(arrayDuplicate.sort(this.comparison_basis))
	})




})
