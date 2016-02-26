
class NodeGraph:

    def __init__(self, name, children = []):
        self.name = name
        self.children = children


        def add_child(self, new_child):
            self.children.append(new_child)
