/*
 * heapSort solution
 * Three methods:
 * 1)  buildHeap(array)
 *		Turn array into another heap-based array
 *	2) buildHeap(array)
 *		(start at index ((n/2)-1) in array and move down to 0)
 *		call "heapify" until you reach beginning of array
 *	3) heapify(array, current, max)
 *		max = length of array
 *		creating heap structure within the array:
 *		current = index of currect "root" value
 *		left node stored at index (2*current) + 1
 *		right  node stored at index (2*current) + 2
 *		confirm that current is in fact larger than left and right nodes
 *		if not, then switch parent or child with max node		
 *
*/


var heapify = function(array, current, max){
	// these are index values of left and right children
	largest = current
	left = (2 * current) + 1
	right = (2 * current) + 2
	
	if(left < max && array[left] > array[current]){
		largest = left
	if(right < max && array[right] > array[current]){
		largest = right 
	}
	if(largest != current){
		// swap these two values
		temp = current
		array[current] = array[largest]
		array[largest] = temp
		//recurse on the next largest value
		heapify(array, largest, max)
	}
}
