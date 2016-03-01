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


    def print_breadth_first(self, starting_node):
        queue = Queue()
        queue.put(starting_node)
        while not queue.empty():
            current_node = queue.get()
            if current_node.left_child:
                queue.put(current_node.left_child)
            if current_node.right_child:
                queue.put(current_node.right_child)
            self.return_array.append(current_node.value)


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
    iterative in_order

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


    """
    4.2 Given a sorted increasing-order array with unique integers, write algorithm to create a minimal-height binary search tree

    ex [1, 3, 5, 10, 15, 24, 38, 40, 35, 45]
    Defn: binary search tree:
    left side of tree > n > right side of tree

    Pseudo:
    make everyting a node
    Have to divide this array in half, insert in order from there
    get (num_elements/2) position-this is root
    everything above (num_elements/2) position goes in another list (right side)
    other elements go on left_side_list

    insert(left_side_list[0])
    insert(right_side_list[0])
    for x in left_side_list:
        insert(x)
    for x in right_side_list:
        insert(x)
    """

    def sort_array_binary_tree(self, array):

        middle_node = (len(array) / 2)
