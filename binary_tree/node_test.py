import unittest
from node import Node

class NodeTestCase(unittest.TestCase):

    def setUp(self):
        self.node = Node(1)

    def test_value(self):
        self.assertEqual(self.node.value, 1)

    def test_children(self):
        self.node.left_child = Node(2)
        self.node.right_child = Node(3)
        self.assertIsInstance(self.node.left_child, Node)
        self.assertIsInstance(self.node.right_child, Node)
        self.assertEqual(self.node.left_child.value, 2)
        self.assertEqual(self.node.right_child.value, 3)


if __name__ == '__main__':
    unittest.main()
