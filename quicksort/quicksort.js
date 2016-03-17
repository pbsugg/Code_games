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

var insertionSort = function(arrayToSort, comparisonOperator){

//Building a quick insertion sort algorithm to help derive median
// worse-case O complexity n^2
   
    for(var divider = 1; divider < arrayToSort.length; j++){
	
	var nextToSort = divider - 1

    }
}

//insert a new element to array in given position, shift others over
var insertToArray = function(inputArray, elementToInsert, positionToInsert){
   
	var newArray = []
	var inserted = false
	for(var i = 0; i < inputArray.length + 1; i++){
	    if(i < positionToInsert ){
		newArray[i] = inputArray[i]
	    }
	    else if(i == positionToInsert){
		newArray[i] = elementToInsert
	    }
	    else{
	   	newArray[i] = inputArray[i - 1] 
	    }
	}
	return newArray

}

////need this for my median of three method
//var medianOfThree = function(arrayOfNumbers){
    
	////select three random values
	//var random_values = []
	//for (var i = 0; i < 3; i++){
		    //var randomFromArray = Math.floor(Math.random() * (arrayOfNumbers.length))
		//random_values[i] = arrayOfNumbers[randomFromArray]
	//}

	//return (pivot)
	   
//}
