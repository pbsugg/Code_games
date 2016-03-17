/* Pseudo: 
 *
 * Inputs: 
 * 1) Array to sort
 * 2) Start, End positions in array 
 * 3) Callback comparison function
 * 
 * Two parts to algorithm:
 *
 * 1) Recursively divide up the array until you have only single elements
 * 	a) pick an element as the pivot (median of three)
 * 		pick three random values, median is pivot
 * 	b) all elements on one side should be greater than the pivot
 * 	c) all elements on the other side should be less than pivot
 * 	d) partion at the pivot point (pivot goes below)
 * 	e) recursively apply pivot operation to both sides until only single
 * 	elements
 * 	f) combine values
 * 2) Apply your sort method (median of three)
 * 	Sort method just a simple "greater than" comparison"
 *
 * Sort method takes two values, compares them
 *
 */


var quickSort = function(arrayToSort, startPoint, endPoint, comparisonOperator){


}


var partition = function(arrayToSort){

	var pivot = medianOfThree(arrayToSort)
}


//utility functions


var comparisonOperator = function(value1, value2){
	
	if(value1 > value2){
		return 1;	
	}

	else if(value2 > value1){
		return -1;	
	}
	else{
		return 0;	
	}

}

var insertionSort = function(arrayToSort){

//Building a quick insertion sort algorithm to help derive median
// worse-case O complexity n^2
  	 
    for(var current = 1; current < arrayToSort.length; current++){

	var nextToSort = current 
	    //keep shifting elements one over to the right until you find
	    // correct sorted position
	    // comparing current with the element to the left of current
	while( current > 0 && (arrayToSort[current] < arrayToSort[current - 1])){
	    	var holder = arrayToSort[current] 
		arrayToSort[current] = arrayToSort[current - 1]	
		arrayToSort[current - 1] = holder
		current -= 1 
	}
    }
    return arrayToSort
}

//need this for my median of three method
var medianOfThree = function(arrayOfNumbers){
	//select three random values
	var random_values = []
	for (var i = 0; i < 3; i++){
		var randomFromArray = Math.floor(Math.random() * (arrayOfNumbers.length))
		random_values[i] = arrayOfNumbers[randomFromArray]
	}
	var sorted  = insertionSort(random_values)
	var pivot = sorted[1]
	return(pivot)
	   
}