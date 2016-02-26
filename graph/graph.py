from node_graph import NodeGraph
from Queue import Queue

class Graph:

    def __init__(self, nodes = []):
        self.nodes = nodes
        self.search_output = []

    def visit(self, node):
        node.visited = True
        print node.name
        self.search_output.append(node.name)

    #maybe try this iteratively as well
    def depth_first_search(self, root):
        root.visited = True
        self.search_output.append(root.name)
        for node in root.children:
            if node.visited == False:
                self.depth_first_search(node)

    def breadth_first_search(self, root):
        queue = Queue()
        queue.put(root)
        while queue.empty() == False:
            current_node = queue.get()
            if current_node.visited == False:
                self.visit(current_node)
                for child in current_node.children:
                    if child.visited == False:
                        queue.put(child)
