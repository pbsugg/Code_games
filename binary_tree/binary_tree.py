from node import Node
from Queue import Queue



class BinaryTree:

    def __init__(self, root):
        self.root = root
        self.return_array = []

    #should start with root here
    #breadth-first insert
    def insert(self, current_node, node_to_insert):
        # in case current_node is empty
        if current_node.space() == True:
            return current_node.insert(node_to_insert)
        #for all other cases, start building a queue and checking
        else:
            holding_queue = Queue()
            holding_queue.put(current_node.left_child)
            holding_queue.put(current_node.right_child)
            while holding_queue.empty() == False:
                    possible_node = holding_queue.get()
                    if possible_node.space():
                        return possible_node.insert(node_to_insert)
                    else:
                        holding_queue.put(possible_node.left_child)
                        holding_queue.put(possible_node.right_child)

    def visit_in_order(self, starting_node):
        if starting_node != None:
            self.visit_in_order(starting_node.left_child)
            self.return_array.append(starting_node.value)
            self.visit_in_order(starting_node.right_child)
