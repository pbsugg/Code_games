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

    def test_print_breadth_first(self):
        root = self.binary_tree.root
        for node in range(2, 16):
            new_node = Node(node)
            self.binary_tree.insert(root, new_node)
        self.binary_tree.print_breadth_first(root)
        result = self.binary_tree.return_array
        self.assertEqual(result, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])

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
        self.binary_tree.visit_in_order(root)
        self.assertEqual(self.binary_tree.return_array, [4, 2, 5, 1, 6, 3, 7])


    def test_visit_pre_order(self):
        root = self.binary_tree.root
        for node in range(2,16):
            insert_node = Node(node)
            self.binary_tree.insert(root, insert_node)
        self.binary_tree.visit_pre_order(root)
        self.assertEqual(self.binary_tree.return_array, ([1, 2, 4, 8, 9, 5, 10,
                                                        11, 3, 6, 12, 13, 7, 14, 15]))

    def test_visit_post_order(self):
        root = self.binary_tree.root
        for node in range(2,16):
            insert_node = Node(node)
            self.binary_tree.insert(root, insert_node)
        self.binary_tree.visit_post_order(root)
        self.assertEqual(self.binary_tree.return_array, ([8, 9, 4, 10, 11, 5, 2, 12,
                                                        13, 6, 14, 15, 7, 3, 1]))

    def test_visit_in_order_iterative(self):
        root = self.binary_tree.root
        for node in range(2,16):
            insert_node = Node(node)
            self.binary_tree.insert(root, insert_node)
        self.binary_tree.visit_in_order(root)
        self.assertEqual(self.binary_tree.return_array, [8, 4, 9, 2, 10, 5, 11, 1,
                                                        12, 6, 13, 3, 14, 7, 15])

    def test_insert_array_binary_tree_even(self):
        test_array1 = [1, 3, 5, 10, 15, 24, 38, 40, 45, 55]
        self.binary_tree.sort_array_binary_tree(test_array1)
        self.binary_tree.print_breadth_first
        result = self.binary_tree.return_array
        self.assertEqual(result, [111, 4, 145, 6, 14, 234, 444, 43, 94, 555, 4566] )


    def test_insert_array_binary_tree_odd(self):
        test_array2 = [4, 6, 14, 43, 94, 111, 145, 234, 444, 555, 4566]
        self.binary_tree.sort_array_binary_tree(test_array2)
        self.binary_tree.print_breadth_first
        result = self.binary_tree.return_array
        self.binary_tree.sort_array_binary_tree(test_array2, [24, 1, 38, 3, 5, 40, 45, 10, 15, 55])

if __name__ == '__main__':
    unittest.main()
