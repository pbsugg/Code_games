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

    def test_insert_simple(self):
        root = self.binary_tree.root
        node2 = Node(2)
        self.binary_tree.insert(root, node2)
        self.assertEqual(root.left_child, node2)
        node3 = Node(3)
        self.binary_tree.insert(root, node3)
        self.assertEqual(root.right_child, node3)
        node4 = Node(4)
        self.binary_tree.insert(root, node4)
        self.assertEqual(root.right_child.left_child, node4)
        node0 = Node(0)
        self.binary_tree.insert(root, node0)
        self.assertEqual(root.left_child.left_child, node0)
        node5 = Node(5)
        self.binary_tree.insert(root, node5)
        self.assertEqual(root.right_child.right_child, node5)
        node6 = Node(6)
        self.binary_tree.insert(root, node6)
        self.assertEqual(root.right_child.right_child.left_child, node6)
        node7 = Node(7)
        self.binary_tree.insert(root, node7)
        self.assertEqual(root.right_child.right_child.right_child, node7)


    def test_visit_in_order(self):
        root = self.binary_tree.root
        for node in range(2,7):
            node = Node(node)
            self.binary_tree.insert(root, node)
        self.assertEqual(self.binary_tree.visitInOrder(root), [4, 2, 5, 1, 6, 3, 7])


    def test_visit_pre_order(self):
        root = self.binary_tree.root
        for node in range(2,15):
            node = Node(node)
            self.binary_tree.insert(root, node)

    def test_visit_post_order(self):
        pass


if __name__ == '__main__':
    unittest.main()
