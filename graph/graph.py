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
    4.1 Given directed graph, find out whether there is a route between two nodes.  Output the route

    Pseudo: have to search a *single* path each time, not multiple, so I can keep track

    Idea is that you maintain *one* path at a time, and keep track of where going
    Get a node, put onto the stack
    IF it has children, pick the first one
        add to output_array
        if current_value = search_value, RETURN the array
        Keep following that pattern, checking until you run out of options
    IF path dead-ends, go back to the beginning, reset the output_array

    """

        
