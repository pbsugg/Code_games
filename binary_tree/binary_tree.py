from node import Node
from Queue import Queue



class BinaryTree:

    def __init__(self, root):
        self.root = root
        self.return_array = []


    """
    Rule:
    INPUT: current_node
    Create a "holding queue"
    IF either child of current_node is empty:
        return (node_insert node)
    ELSE
        put both children in the holding stack:
        run the insert function recursively on these children



    ElSIF node_to_insert value is less than or equal current_node
        tree_insert (recursively) to left
    ELSE
        tree_insert (recursively) to right

    """

    #should start with root here
    #really looking for a breadth-first insert
    def insert(self, current_node, node_to_insert):
        # in case current_node is empty
        if current_node.space() == True:
            return current_node.insert(node_to_insert)
        #for all other cases, start building a queue
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
