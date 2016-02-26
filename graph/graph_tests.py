import unittest
from graph import Graph
from node_graph import NodeGraph


class GraphTestCase(unittest.TestCase):

    #6 nodes, see connections on McDowell, p. 107
    def setUp(self):
        pass

    def test_depth_first_search(self):
        node0 = NodeGraph(0)
        node1 = NodeGraph(1)
        node2 = NodeGraph(2)
        node3 = NodeGraph(3)
        node4 = NodeGraph(4)
        node5 = NodeGraph(5)
        node0.children = [node1, node4, node5]
        node1.children = [node3, node4]
        node2.children = [node1]
        node3.children = [node2, node4]
        self.graph = Graph([node0, node1, node2, node3, node4, node5])
        self.graph.depth_first_search(node0)
        result = self.graph.search_output
        self.assertEqual(result, [0, 1, 3, 2, 4, 5])

    def test_breadth_first_search(self):
        self.graph.breadth_first_search(node0)
        result = self.graph.search_output
        #technically the children of each node have to be organized by value
        #*lowest to highest*
        #in order to make this work!!!
        self.assertEqual(result, [node0, node1, node4, node5, node3, node2])


if __name__ == "__main__":
    unittest.main()
