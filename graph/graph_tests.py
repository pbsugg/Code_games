import unittest
from graph import Graph
from node_graph import NodeGraph


class GraphTestCase(unittest.TestCase):

    #6 nodes, see connections on McDowell, p. 107
    def setUp(self):
        node0 = NodeGraph(0)
        node1 = NodeGraph(1)
        node2 = NodeGraph(2)
        node3 = NodeGraph(3)
        node4 = NodeGraph(4)
        node5 = NodeGraph(5)
        node0.children = [node1, node2, node5]
        node1.children = [node4, node3]
        node2.children = [node1]
        node3.children = [node2, node4]

        
