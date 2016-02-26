from node_graph import NodeGraph


class Graph:

    def __init__(self, nodes = []):
        self.nodes = nodes
        self.search_output = []

    def visit(self, node):
        node.visited = True

    def depth_first_search(self, root):
        root.visited = True
        self.search_output.append(root.name)
        for node in root.children:
            if node.visited == False:
                self.depth_first_search(node)
