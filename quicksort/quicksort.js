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

    if(startPoint < endPoint){
    
    var pivot = partition(arrayToSort, startPoint, endPoint, comparisonOperator)
    //sort right and left side partitions recursively
    quickSort(arrayToSort, startPoint, pivot - 1, comparisonOperator)
    quickSort(arrayToSort, pivot + 1, endPoint, comparisonOperator)
   
    }

}

//partition into two sorted arrays
var partition = function(arrayToSort, startPoint, endPoint, comparisonOperator){

    var pivot = medianOfThree(arrayToSort)

   --startPoint;
   ++endPoint;
   var pivot = medianOfThree(arrayToSort);

    do{
	//checking to see if values are on right side of their pivot
	do{
		
		--endPoint;

	   }while(comparisonOperator(endPoint, pivot) > 0)

	do{
	    	++startPoint;
	
	   }while(comparisonOperator(startPoint, pivot) < 0)

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

    return pivot;

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

//Building a quick insertion sort algorithm for the hell of it and to help derive median
// worse-case O complexity n^2
  	 
	    //keep shifting elements one over to the right until you find
	    // this current is not less than the value to left of current 
	    // This has nice side effect of deleting current's original
	    // position, don't have to worry about indexing out of your array

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
