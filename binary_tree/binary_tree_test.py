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

    def test_insert_3_level_node(self):
        root = self.binary_tree.root
        for node in range(2,16):
            new_node = Node(node)
            self.binary_tree.insert(root, new_node)
        self.assertEqual(root.left_child.value, 2)
        self.assertEqual(root.right_child.value, 3)
        self.assertEqual(root.left_child.left_child.value, 4)
        self.assertEqual(root.left_child.right_child.value, 5)
        self.assertEqual(root.right_child.left_child.value, 6)
        self.assertEqual(root.right_child.right_child.value, 7)
        self.assertEqual(root.left_child.left_child.left_child.value, 8)
        self.assertEqual(root.left_child.left_child.right_child.value, 9)
        self.assertEqual(root.left_child.right_child.left_child.value, 10)
        self.assertEqual(root.left_child.right_child.right_child.value, 11)
        self.assertEqual(root.right_child.left_child.left_child.value, 12)
        self.assertEqual(root.right_child.left_child.right_child.value,13)
        self.assertEqual(root.right_child.right_child.left_child.value, 14)
        self.assertEqual(root.right_child.right_child.right_child.value, 15)

    def test_visit_in_order(self):
        root = self.binary_tree.root
        for node in range(2,8):
            insert_node = Node(node)
            self.binary_tree.insert(root, insert_node)
        # print(root.left_child.value)
        # print(root.right_child.value)
        self.binary_tree.visit_in_order(root)
        self.assertEqual(self.binary_tree.return_array, [4, 2, 5, 1, 6, 3, 7])


    def test_visit_pre_order(self):
        root = self.binary_tree.root
        for node in range(2,15):
            insert_node = Node(node)
            self.binary_tree.insert(root, insert_node)
        self.binary_tree.visit_pre_order(root)

    def test_visit_post_order(self):
        pass


if __name__ == '__main__':
    unittest.main()
