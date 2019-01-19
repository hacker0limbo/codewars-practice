from index import move_zeros
import unittest


class TestIndex(unittest.TestCase):

    def test_move_zeros(self):
        self.assertEqual(move_zeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]), [1, 2, 1, 1, 3, 1, 0, 0, 0, 0])
        # self.assertEqual(move_zeros([9, 0.0, 0, 9, 1, 2, 0, 1, 0, 1, 0.0, 3, 0, 1, 9, 0, 0, 0, 0, 9]),
        #                  [9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
        self.assertEqual(move_zeros(["a", 0, 0, "b", "c", "d", 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]),
                         ["a", "b", "c", "d", 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
        self.assertEqual(
            move_zeros(["a", 0, 0, "b", None, "c", "d", 0, 1, False, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9]),
            ["a", "b", None, "c", "d", 1, False, 1, 3, [], 1, 9, {}, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
        self.assertEqual(move_zeros([0, 1, None, 2, False, 1, 0]), [1, None, 2, False, 1, 0, 0])
        self.assertEqual(move_zeros(["a", "b"]), ["a", "b"])
        self.assertEqual(move_zeros(["a"]), ["a"])
        self.assertEqual(move_zeros([0, 0]), [0, 0])
        self.assertEqual(move_zeros([0]), [0])
        self.assertEqual(move_zeros([False]), [False])
        self.assertEqual(move_zeros([]), [])


if __name__ == '__main__':
    unittest.main()
