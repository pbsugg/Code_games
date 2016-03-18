/*
 *pseudo
 Inputs: 
 *Array
 * Upper and Lower bound indexes (start by set to 0 and (length -1))
 * comparison basis function (taken from quicksort)
 * 
 * Functions:
 * splitElements: keep splitting until you have individual elements
 * MergeSort: recombine elements, comparing at every stage
 * comparisonOperator: function that provides basis for comparison
 */

var mergeSort = function(arrayToSort, lowerBound, upperBound, comparisonOperator){

	//calculate midpoint
	if (lowerBound < upperBound){

		var midpoint = ((lowerBound + upperBound) / 2) 

		if(mergeSort(arrayToSort, lowerBound, midPoint, comparisonOperator) < 0){

			return -1
		}
		if(mergeSort(arrayToSort, lowerBound, upperBound, comparisonOperator) < 0){

			return -1
		}

		if(merge(arrayToSort, lowerBound, midpoint, upperBound, comparisonOperator) < 0){
			return -1
		}
	}

})

var merge = function(arrayToSort, lowerBound, midPoint, upperBound, comparisonOperator){

	var lowerBoundPosition = lowerBound;
	var midPointPosition = midPoint + 1;
	var mPos = 0;
	while(lowerBoundPosition <= midPoint ||  midPointPosition <= upperBound){
	
		if(lowerPosition <= midPoint){
			while(midPointPosition <= upperBound){

			}
		}
	}
})

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
