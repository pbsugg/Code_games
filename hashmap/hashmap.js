
 /*

Hashtable Object (basically an array of linked lists)

Initialize:

Inputs (attributes):
(1) "Buckets" (number of spaces in table)
(2) Key-deriving function
(3) Hashing function (for creating the hash address)
(5) "Table" --the array of buckets (linked lists)

*/

//hashTable Object

function hashTable(buckets) {

  this.buckets = buckets,
  this.table = []
}

hashTable.prototype.initTable = function(buckets){
	for (var i = 0; i < buckets; i++){
		this.table[i] = new linkedList()
	}
	return(this.table)
  }

hashTable.prototype.size = function(){
    var size = 0
    this.table.forEach(function(value, index){
	//value is linkedListItem
   	size += value.size() 
    })
    return(size)
}

//
// hashing function
/*pseudo
 * input: key value
 * output: bucket value
 * get key, mod by number of buckets in hash
 * return bucket value
 */
hashTable.prototype.hasher = function(key, buckets){
	hashValue = key % buckets
	return(hashValue)
}



//key-deriving function
//pseudo:
/* turn item into string (whatever it is)
 * get length of string-ified item 
 * take the [0] position within that string
 * get unicode value of char at that position
 * return key value
 */
hashTable.prototype.getKey = function(itemToAdd){
	var stringified = itemToAdd.toString()
	var unicodeKey = stringified.charCodeAt(0)
	return(unicodeKey)
}

hashTable.prototype.computeHash = function(itemToAdd){
  	var key = this.getKey(itemToAdd)
	var hash = this.hasher(key, this.buckets)
	return(hash)
  }

//find linkedList bucket that houses a potential value
hashTable.prototype.match = function(valueToSearch){

	var insertBucket = this.computeHash(valueToSearch)
	var potentialList = this.table[insertBucket]
	return(potentialList)
}

//public interface for hashTable

function hTInterface(hashTable){
    this.size = function() {
	return hashTable.size()
    }
}

//go through each bucket in array
// search the linked list, return any matches

hTInterface.prototype.lookUp = function(hashTable, valueToLookup){
    //Find bucket where this hashed value might reside, so we know where to
    //look!  Calling key and hash functions from hashTable
        var listToSearch = hashTable.match(valueToLookup)
	if (listToSearch.getNode(valueToLookup)){
	    return(true)
	}
	else{
	    return(false)
	}
}

/*
 * compute the hash value of the data
 */
hTInterface.prototype.insert = function(hashTable, dataToInsert){
	
    if (this.lookUp(hashTable, dataToInsert)){
   	return(null) 
    }
    else{
	var listToInsert = hashTable.match(dataToInsert)
	listToInsert.addNode(dataToInsert)
	return(dataToInsert)
    }
}


hTInterface.prototype.remove = function(hashTable, valueToRemove){

    if (this.lookUp(hashTable, valueToRemove)){

	var listWithValue = hashTable.match(valueToRemove)
	listWithValue.deleteNode(valueToRemove)	
	
    }

}
