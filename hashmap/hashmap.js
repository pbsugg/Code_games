
 /*

Hashtable Object (basically an array of linked lists)

Initialize:

Inputs (attributes):
(1) Integer: buckets
(2) "Buckets" (number of spaces in table)
(3) Hashing function (for creating the hash address)
(4) "Match"--for determining whether two keys match(input: two keys)
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

var getKey = function(itemToAdd){

}
// hashing function
/*pseudo
 * input: key value
 * output: bucket value
 * get key, mod by number of buckets in hash
 * return bucket value
 */

var computeHash = function(key){
  return("hello")
}

////////////////////////////////////////////////////////////////////////////////

var buckets = function(){
   return("hello")
 }

var match = function(key1, key2){

}

var destroy = function(key){

}

function hashTable(buckets) {

  this.buckets = buckets,
  this.size = function(){

  }
  this.hash = hash,
  this.match= match,
  this.destroy = destroy,
  this.table = []

}
