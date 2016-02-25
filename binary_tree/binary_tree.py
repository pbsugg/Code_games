from node import Node

class BinaryTree:

    def __init__(self, root):
        self.root = root
        self.return_array = []


    """
    Rule:
    DON'T insert duplicate keys (if equal to current value, do nothing)
    IF either child of current_node is empty:
        node_insert node
    ElSIF node_to_insert value is less than or equal current_node
        tree_insert (recursively) to left
    ELSE
        tree_insert (recursively) to right

    """

    #should start with root here
    #really looking for a breadth-first insert
    def insert(self, current_node, node_to_insert):
        if current_node.space() == True:
            current_node.insert(node_to_insert)
        elif current_node.value >= node_to_insert.value:
            self.insert(current_node.left_child, node_to_insert)
        elif current_node.value <= node_to_insert.value:
            self.insert(current_node.right_child, node_to_insert)


    def visit_in_order(self, starting_node):
        if starting_node != None:
            self.visit_in_order(starting_node.left_child)
            self.return_array.append(starting_node.value)
            self.visit_in_order(starting_node.right_child)
