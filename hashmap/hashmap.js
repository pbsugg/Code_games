
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

//key-deriving function
//pseudo:
/* turn item into string (whatever it is)
 * get length of string-ified item 
 * take a random position within that string
 * get unicode value of char at that position
 * return key value
 */
//
// hashing function
/*pseudo
 * input: key value
 * output: bucket value
 * get key, mod by number of buckets in hash
 * return bucket value
 */


////////////////////////////////////////////////////////////////////////////////

//hashTable Object

function hashTable(buckets) {

  this.buckets = buckets,
  this.table = []
  this.tableInitialized = false
}

hashTable.prototype.initTable = function(buckets){
	for (var i = 0; i < buckets; i++){
		this.table[i] = new linkedList()
	}
  }
hashTable.prototype.size = function(){
    var size = 0
    for (var listItem in this.buckets){
    
    }
}

hashTable.prototype.destroy = function(itemToDestroy){

}

hashTable.prototype.hasher = function(key, buckets){
	hashValue = key % buckets
	return(hashValue)
}

hashTable.prototype.getKey = function(itemToAdd){
	stringified = itemToAdd.toString()
	randomStringPosition = Math.floor(Math.random() * stringified.length)
	unicodeKey = stringified.charCodeAt(randomStringPosition)
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
    this.size = hashTable.size()
}

//go through each bucket in array
// search the linked list, return any matches

hTInterface.prototype.lookUp = function(hashTable, valueToLookup){

}

hTInterface.prototype.insert = function(hashTable, dataToInsert){

}

