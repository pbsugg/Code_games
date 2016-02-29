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
        node0.children = [node1, node4, node5]
        node1.children = [node3, node4]
        node2.children = [node1]
        node3.children = [node2, node4]
        self.graph = Graph([node0, node1, node2, node3, node4, node5])

    def tearDown(self):
        self.graph = None

    def test_depth_first_search(self):
        self.graph.depth_first_search(self.graph.nodes[0])
        result = self.graph.search_output
        """
        technically the children of each node have to be organized by value
        *lowest to highest*
        in order to make this work!!!
        might need to factor into your methods for adding children
        """
        self.assertEqual(result, [0, 1, 3, 2, 4, 5])

    def test_breadth_first_search(self):
        self.graph.breadth_first_search(self.graph.nodes[0])
        result = self.graph.search_output
        self.assertEqual(result, [0, 1, 4, 5, 3, 2])

    def test_search_for_path_one_step(self):
        result = self.graph.search_for_path(self.graph.nodes[0], 5)
        self.assertEqual(result, True)

    def test_search_for_path_multi_step(self):
        result = self.graph.search_for_path(self.graph.nodes[0], 2)
        self.assertEqual(result, True)

    def test_failed_search_for_path(self):
        result = self.graph.search_for_path(self.graph.nodes[2], 0)
        self.assertEqual(result, False)


if __name__ == "__main__":
    unittest.main()
