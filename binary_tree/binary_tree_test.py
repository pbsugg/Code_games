import unittest
from node import Node
from binary_tree import BinaryTree


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

    def test_insert(self):
        node2 = Node(2)
        node3 = Node(3)
        self.node.insert(node2)
        self.node.insert(node3)
        self.assertEqual(self.node.left_child, node2)
        self.assertEqual(self.node.right_child, node3)
        anotherNode = Node(4)
        self.assertEqual(self.node.insert(anotherNode), None)


class BinaryTreeTestCase(unittest.TestCase):

    def setUp(self):
        root_node = Node(1)
        binary_tree = BinaryTree(root_node)
        self.binary_tree = binary_tree

    def test_root(self):
        root = self.binary_tree.root
        self.assertEqual(root.value, 1)



if __name__ == '__main__':
    unittest.main()
