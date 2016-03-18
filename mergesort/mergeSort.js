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
		if(mergeSort(arrayToSort, (midPoint + 1), upperBound, comparisonOperator) < 0){

			return -1
		}

		if(merge(arrayToSort, lowerBound, midpoint, upperBound, comparisonOperator) < 0){
			return -1
		}
	}

}

var merge = function(arrayToSort, lowerBound, midPoint, upperBound, comparisonOperator){
	
	var resultArray = []
	var leftArrayPosition = lowerBound;
	var rightArrayPosition = midPoint + 1;
	// results array starts at 0 b/c no values written yet
	var resultArrayPosition = 0;
	// loop runs while either left or right element  has elements to merge
	while(leftArrayPosition <= midPoint ||  rightArrayPosition <= upperBound){
	
		//left array is exhausted, but still elements in right
		//see note below on right array
		if(leftArrayPosition > midPoint){
			while(rightArrayPosition <= upperBound){
				resultArray[resultArrayPosition] = arrayToSort[rightArrayPosition]	
				++rightArrayPosition;
				++resultArrayPosition;
			}
			//continue b/c only one or other half of loop will have values left,
			//not both
			continue;
		}

		//right array is exhausted, but still elements in left
		// right elements are already sorted, so we copy them over one after
		// another 
		else if(rightArrayPosition > upperBound){
			while(leftArrayPosition <= midpoint){
				resultArray[resultArrayPosition] = arrayToSort[leftArrayPosition] 
				++leftArrayPosition;
				++resultArrayPosition;
			}
			continue;
		}
	
		//if element in right array is greater, insert left array element to
		//result first
		if ((comparisonOperator(arrayToSort[leftArrayPosition],
		arrayToSort[rightArrayPosition]) < 0)){
		
			resultArray[resultArrayPosition] = arrayToSort[leftArrayPosition]
			++leftArrayPosition;
			++resultArrayPosition;
		}
		//and vice-versa
		else{
			
			resultArray[resultArrayPosition] = arrayToSort[rightArrayPosition]
			++rightArrayPosition;
			++resultArrayPosition;
		}
	}
	return resultArray
}

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
