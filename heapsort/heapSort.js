/*
 * heapSort solution
 * Three methods:
 * 1)  buildHeap(array)
 *		Turn array into another heap-based array
 *	2) buildHeap(array)
 *		(start at index ((n/2)-1) in array and move down to 0)
 *		call "heapify" until you reach beginning of array
 *	3) heapify(array, current, max)
 *		creating heap structure within the array:
 *		current = index of currect "root" value
 *		left node stored at index (2*current) + 1
 *		right  node stored at index (2*current) + 2
 *		
*/
