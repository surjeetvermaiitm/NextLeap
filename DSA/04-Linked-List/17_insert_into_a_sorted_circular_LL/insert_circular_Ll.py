"""
class SinglyLinkedListNode:
	def __init__(self, data: int = None, next = None) -> None:
		self.data = data
		self.next = next

"""
class Solution(object):
    def insert(self, head, val):
        """
        :type head: Node
        :type insertVal: int
        :rtype: Node
        """
        node = SinglyLinkedListNode(val, head)
        # case 1 no head
        if not head:
            return node
        prev, cur = head, head.next
        while 1:
            # case 2: prev.val <= val <= cur.val
            if prev.data <= val <= cur.data:
                break

            # case 3: prev.val > cur.val and val < cur.val or prev.val < cur
            elif prev.data > cur.data and (val <= cur.data or prev.data <= val):
                break

            prev, cur = prev.next, cur.next
            # case 4: prev == head
            if prev == head: # in case of all nodes have same value that are > val 
                break

        # insert node between prev and cur
        prev.next = node
        node.next = cur