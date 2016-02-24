import unittest
from node import Node
from binary_tree import BinaryTree

class BinaryTree(unittest.TestCase):

    def setUp(self):
        rootNode = Node(1)
        self.tree = BinaryTree(rootNode)

    def test_root(self):
        self.assertEqual(self.tree.root, rootNode)

    def test_insert(self):
        node2 = Node(2)
        node3 = Node(3)
        self.tree.insert(node2)
        self.tree.insert(node3)
        self.assertEqual(self.root.left_child, node2)
        self.assertEqual(self.root.right_child, node3)
        anotherNode = Node(4)
        self.assertRaises(self.tree.insert(anotherNode), SpaceException)


if __name__ == '__main__':
    unittest.main()
