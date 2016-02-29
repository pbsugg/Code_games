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


    set start_node to current_node
    IF it has children, pick the first one
        add to output_array
        if current_value = search_value, RETURN the array
        Keep following that pattern, checking until you run out of options
    IF path dead-ends, go back to the beginning, reset the output_array

    get a node
    create a stack
    PUT all its children in a stack
    WHILE the stack is not empty
        current_node = stack.pop()
        for X of current_node.children:
            IF X is not visited
                put its name in the output array
                IF it's the searched_for entry
                    return the output array
                ELSE
                    add its children to the stack
            ELSE (if it's visited OR has no children)
                clear the output_array
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
