/* Pseudo: 
 *
 * Inputs: 
 * 1) Array to sort
 * 2) Start, End positions in array 
 * 3) comparison function 
 * 
 * Two parts to algorithm:
 *
 * 1) Recursively divide up the array until you have only single elements
 * 	a) pick an element as the pivot (median of three rule)
 * 		median of three rule = pick three random values, median is pivot
 * 	b) all elements on left  side should be greater than the pivot
 * 	c) all elements on the right side should be less than pivot
 * 	d) partion array at the pivot point 
 * 	e) recursively apply this operation to both sides until only single
 * 	elements are left
 *
 */


var quickSort = function(arrayToSort, lowerBound, upperBound){


    var pivot = partition(arrayToSort, lowerBound, upperBound)
    //sort right and left side partitions recursively
	if(lowerBound < pivot - 1){
    	quickSort(arrayToSort, lowerBound, pivot - 1)
	}
	if(pivot < upperBound){
    	quickSort(arrayToSort, pivot, upperBound)
    }

}

//partition into two arrays
//everything in segment to left of pivot is < pivot value and vice-versa for
//right side
var partition = function(arrayToSort, lowerBound, upperBound){
	
	var left = lowerBound
	var right = upperBound
    var pivot = medianOfThree(arrayToSort)
	var holder = null

	while(left <= right){
	//checking to see if values are on right side of their pivot
		while(arrayToSort[right] > pivot){
			
			--right;

		}

		while(arrayToSort[left] < pivot){

			++left;
		}

		if(left <= right){

			// switch the values whenver you generate two on wrong side of pivot
			holder = arrayToSort[left]
			arrayToSort[left] = arrayToSort[right]
			arrayToSort[right] = holder
			++left;
			--right;

		}
   //not expecting the conditional to break out--waiting for "break" to trigger
    } 

    return left;

}


//utility functions


//Building a quick insertion sort algorithm for the hell of it and to help derive median value in
// array
// worse-case O complexity n^2
  
//start with variable, current, equal to position 1 in array (position 0 is
//triviall sorted)    
// Keep comparing current to value to left (current - 1) WHILE current is > 0
// If current is less than current -1, swap the values
// continue swapping until you find a value for which current > (current - 1)
// (or at end)
// This has nice side effect of deleting current's original
// // position, so the shifting takes place in the original array-- don't have
// to create new one.  Swapping action means you  don't have to worry about indexing out of your array

var insertionSort = function(arrayToSort){

    for(var current = 1; current < arrayToSort.length; current++){

	var nextToSort = current 
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
//Select three elements from array at random
//get the middle (median) value of those three
//uses insertion sort method from above (overkill for thre elements but
//interesting)
var medianOfThree = function(arrayOfNumbers){
	//select three random values
	var random_values = []
	for (var i = 0; i < 3; i++){
		var randomFromArray = 
		Math.floor(Math.random() * (arrayOfNumbers.length))
		random_values[i] = arrayOfNumbers[randomFromArray]
	}
	var sorted  = insertionSort(random_values)
	var pivot = sorted[1]
	return(pivot)
	   
}
