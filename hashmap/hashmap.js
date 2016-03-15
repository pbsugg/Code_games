
 /*

Hashtable Object (basically an array of linked lists)

Initialize:

Inputs (attributes):
(1) Integer: buckets
(2) "Buckets" (number of spaces in table)
(3) Hashing function (for creating the hash address)
(4) "Match"--for determining whether two keys match(input: two keys) (lookup function)
(5) "Destroy" function-- eliminate data
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

hashTable.prototype.destroy = function(itemToDestroy){

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
 * take a random position within that string
 * get unicode value of char at that position
 * return key value
 */
hashTable.prototype.getKey = function(itemToAdd){
	var stringified = itemToAdd.toString()
	var randomStringPosition = Math.floor(Math.random() * stringified.length)
	var unicodeKey = stringified.charCodeAt(randomStringPosition)
	return(unicodeKey)
}

hashTable.prototype.computeHash = function(itemToAdd){
  	var key = this.getKey(itemToAdd)
	var hash = this.hasher(key, this.buckets)
	return(hash)
  }

hashTable.prototype.match = function(key1, key2){
	if(key1 == key2){
	    return true
	}
	else{
	    return false
	}
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
    	var bucketToSearch = hashTable.computeHash(valueToLookup)
	var listToSearch = hashTable.table[bucketToSearch]
	console.log(bucketToSearch)
	console.log(listToSearch)
	if (listToSearch.getNode(valueToLookup)){
	    console.log("here!")
	    return(true)
	}else{
	    return(false)
	}
}

/*
 * compute the hash value of the data
 */
hTInterface.prototype.insert = function(hashTable, dataToInsert){
	
    if (this.lookUp(hashTable, dataToInsert)){
   	return(null) 
    }else{
	//if it's not in there
	//compute the hash position
	//insert it into the next position in the linked list
	var insertBucket = hashTable.computeHash(dataToInsert)
	var listToInsert = hashTable.table[insertBucket]
	listToInsert.addNode(dataToInsert)
	return(dataToInsert)
    }
}

