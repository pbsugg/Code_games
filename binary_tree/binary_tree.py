from node import Node

class BinaryTree:

    def __init__(self, root):
        self.root = root


        

    """
    IF child is less than value of current node
        move to left node, check for empty spaces
    ELSE
        move to right node, check for empty spaces
    """
