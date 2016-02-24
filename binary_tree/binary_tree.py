from node import Node

class BinaryTree:

    def __init__(self, root):
        self.root = root

    def insert(self, node_to_insert):
        if self.root.left_child == None:
            self.root.left_child = node_to_insert
        elif self.root.right_child == None:
            self.root.right_child = node_to_insert
        else:
            raise SpaceError("No Space!")
