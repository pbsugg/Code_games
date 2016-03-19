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
	//this is continually called recursively until the lower and upper bound are
	//same; this means that each array is a single element!
	if (lowerBound < upperBound){

		var midPoint = ((lowerBound + upperBound) / 2) 

		//these '-1' return values are a c-style thing, they would never
		//actually trigger--what eventually breaks us out of the recursion is
		//the fact that the midpoint will eventually converge with both the
		//upper and lower bounds as the arrays get smaller and smaller.  The
		//"return 0" is what saves us from a stack overflow, not return -1
		if(mergeSort(arrayToSort, lowerBound, midPoint, comparisonOperator) < 0){

			return -1
		}
		if(mergeSort(arrayToSort, (midPoint + 1), upperBound, comparisonOperator) < 0){

			return -1
		}

		if(merge(arrayToSort, lowerBound, midPoint, upperBound, comparisonOperator) < 0){
			return -1
		}
	}
	return 0;

}

var merge = function(arrayToSort, lowerBound, midPoint, upperBound, comparisonOperator){
	
	var resultArray = []
	var leftArrayPosition = lowerBound;
	var rightArrayPosition = midPoint + 1;
	// results array starts at 0 b/c no values written yet
	var resultArrayPosition = 0;
	// loop runs while either left or right side of array still  has elements to merge
	// this is called after the array elements have already been recursively
	// broken up into their smallest parts, so runs the first time when each
	// array is just a single value!
	// This means that on subsequent calls, the arrays have already been sorted
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
			while(leftArrayPosition <= midPoint){
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
	resultArray = [0];
	return 0;
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
