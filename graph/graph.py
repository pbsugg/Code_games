from node_graph import NodeGraph
from Queue import Queue

class Graph:

    def __init__(self, nodes = []):
        self.nodes = nodes
        self.search_output = []

    def visit(self, node):
        node.visited = True
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


    """
    4.1 Given directed graph, find out whether there is a route between two node (just print T or F)

    """

    def search_for_path(self, start_node, name_to_find):
        if start_node.name == name_to_find:
            return True
        queue = Queue()
        start_node.visited = True
        queue.put(start_node)
        while queue.empty() == False:
            current_node = queue.get()
            for child in current_node.children:
                if child.visited == False:
                    if child.name == name_to_find:
                        return True
                    else:
                        child.visited = True
                        queue.put(child)
            current_node.visited == True
        return False
