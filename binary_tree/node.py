


class Node:

    def __init__(self, value):
        self.value = value
        self.left_child = None
        self.right_child = None

    def space(self):
        if self.left_child == None or self.right_child == None:
            return True
        else:
            return False

    #returns none if full
    def insert(self, node_to_insert):
        if self.left_child == None:
            self.left_child = node_to_insert
        elif self.right_child == None:
            self.right_child = node_to_insert
        else:
            return None
