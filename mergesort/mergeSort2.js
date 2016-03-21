// Attempt at a more streamlined version of mergeSort
//


var mergeSort  = function(arrayToSort, startIndex, endIndex, resultArray){
	if ((endIndex - startIndex) < 2){
		// array is trivially "sorted" when you have just one value
		return;
	}
	var midPoint = parseInt((endIndex - startIndex) / 2);
	//call mergeSort recursively on both sides
	mergeSort(arrayToSort, startIndex, midPoint, resultArray);
	mergeSort(arrayToSort, midPoint, endIndex, resultArray);
	//merge the two halves
	merge(arrayToSort, startIndex, midPoint, endIndex, resultArray);
	//copying step is necessary because we are taking the subset of the origin
	//array (now sorted) and using it as the argument for the next level of
	//sorting
	copyToOriginal(arrayToSort, startIndex, endIndex, resultArray);	
}


var merge = function(arrayToSort, startIndex, midPoint, endIndex, resultArray){
	
	var leftCounter = startIndex;
	var rightCounter = midPoint;

	for(current = startIndex; current < endIndex; ++current){
		
		/*
		 * Notes for these conditions:
		 * 1) If counter for left side is still within range AND
		 * 2) Right counter is out of range OR
		 * 3) the left-hand value at this index is less than the right-hand
		 * value (meaning it gets put into the sorting set first)
		 * For all other conditions, the right-side values goes first into the
		 * result array
		 */
		if(leftCounter < midPoint && (rightCounter >= endIndex ||
		arrayToSort[leftCounter] <= arrayToSort[rightCounter])){
			resultArray[current] = arrayToSort[leftCounter]
			leftCounter += 1
		}
		else{
			resultArray[current] = arrayToSort[rightCounter]
			rightCounter += 1
		}
	}	
}

var copyToOriginal = function(arrayToSort, startIndex, endIndex, resultArray){
	for(current = startIndex; current < endIndex; ++current){
		arrayToSort[current] = resultArray[current];
	}
}
