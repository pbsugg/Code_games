from node import Node
from Queue import Queue, LifoQueue



class BinaryTree:

    def __init__(self, root):
        self.root = root
        self.return_array = []

    #should start with root here
    #breadth-first insert
    def insert(self, current_node, node_to_insert):
        # edge case: current_node is empty
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

    def visit_pre_order(self, starting_node):
        if starting_node != None:
            self.return_array.append(starting_node.value)
            self.visit_pre_order(starting_node.left_child)
            self.visit_pre_order(starting_node.right_child)

    def visit_post_order(self, starting_node):
        if starting_node != None:
            self.visit_post_order(starting_node.left_child)
            self.visit_post_order(starting_node.right_child)
            self.return_array.append(starting_node.value)

    """
    Input: starting_node
    Aux data structure: stack (LifoQueue)
    var done = False
    Pseudo:
    current_node == starting_node
    WHILE done = False
        IF current_node == True
            Push the current node
            Make the left child the current node (current = None if no left child)
        ELSE
            IF stack.empty() == True
                done = True
            ELSE
                current = stack.get()
                add current.value to output_array
                current = right_child
    """

    def visit_in_order_iterative(self, current_node):
        stack = LifoQueue()
        done = False
        while done == False:
            if current_node:
                stack.put(current_node)
                current_node = current_node.left_child
            else:
                if stack.empty():
                    done = True
                else:
                    current_node = stack.get()
                    self.return_array.append(current.value)
                    current = current_node.right_child
