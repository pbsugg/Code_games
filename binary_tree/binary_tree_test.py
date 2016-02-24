import unittest
from node import Node

class TestNode(unittest.TestCase):
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


class TestBinaryTree(unittest.TestCase):

    def setUp(self):
        rootNode = Node(1)
        self.root = rootNode

    def test_has_root(self):
        self.assertEqual(self.root, rootNode)

    def test_insert(self):
        node2 = Node(2)
        node3 = Node(3)
        self.insert(node2)
        self.insert(node3)
        self.assertEqual(self.root.left_child, node2)                self.assertEqual(self.root.right_child, node3)


if __name__ == '__main__':
    unittest.main()
