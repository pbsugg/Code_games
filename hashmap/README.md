

Implementation of Hashing function.  Will try writing this in javascript

- `MyHash::new`: Instantiate a new dictionary
- `MyHash#set(key, value)`: Add a key-value pair. If the key is already present, replace the value
- `MyHash#get(key)`: Retrieve the value stored at `key`
- `MyHash#has_key?(key)`: Answer where or not the dictionary has an entry for `key`
- `MyHash#remove(key)`: Remove the entry stored at `key`
- `MyHash#iterate{ |value, key| block }`: Iterate through the Hash, passing the block each value and key

Goal: Every method "besides" iterate as close to O(1) as possible
