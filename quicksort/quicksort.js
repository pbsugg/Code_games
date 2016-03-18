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


var quickSort = function(arrayToSort, startPoint, endPoint, comparisonOperator){

    if(startPoint < endPoint){

    var pivot = partition(arrayToSort, startPoint, endPoint, comparisonOperator)
	console.log(pivot)
    //sort right and left side partitions recursively
    return quickSort(arrayToSort, startPoint, pivot - 1, comparisonOperator)
    return quickSort(arrayToSort, pivot + 1, endPoint, comparisonOperator)
   
    }

}

//partition into two arrays
//everything in segment to left of pivot is < pivot value and vice-versa for
//right side
var partition = function(arrayToSort, startPoint, endPoint, comparisonOperator){

    var pivot = medianOfThree(arrayToSort)

   --startPoint;
   ++endPoint;

    do{
	//checking to see if values are on right side of their pivot
	do{
		
		--endPoint;

	   }while(comparisonOperator(arrayToSort[endPoint], pivot) >= 0)

	do{
	    	++startPoint;
	
	   }while(comparisonOperator(arrayToSort[startPoint], pivot) <= 0)

	if(startPoint >= endPoint){

		break	
	}
	else{
	    // switch the values whenver one is on wrong side of pivot
	    var holder = arrayToSort[startPoint]
	    arrayToSort[startPoint] = arrayToSort[endPoint]
	    arrayToSort[endPoint] = holder
	}
   //not expecting the conditional to break out--waiting for "break" to trigger
    } while(1)

    return endPoint;

}


//utility functions


var comparisonOperator = function(value1, value2){
    
	if(value1 > value2){
	    return 1
	}   
	else if (value2 > value1){
	    return -1
	}
	else{
	    return 0
	}
}

var insertionSort = function(arrayToSort){

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
