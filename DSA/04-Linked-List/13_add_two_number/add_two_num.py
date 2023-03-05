#Link: https://leetcode.com/problems/add-two-numbers/

"""
class SinglyLinkedListNode:
	def __init__(self, data: int = None, next = None) -> None:
		self.data = data
		self.next = next

"""

#class Solution:
	#def addTwoNumbers(self, l1: SinglyLinkedListNode, l2: SinglyLinkedListNode) -> SinglyLinkedListNode:
		# Your code goes here
class Solution:
    def addTwoNumbers(self, l1: SinglyLinkedListNode, l2: SinglyLinkedListNode) -> SinglyLinkedListNode:
        carry = 0
        result = SinglyLinkedListNode(0)
        pointer = result
        while (l1 or l2 or carry):
            first_num = l1.data if l1 else 0
            second_num = l2.data if l2 else 0
            summation = first_num + second_num + carry
            num = summation % 10
            carry = summation // 10
            pointer.next = SinglyLinkedListNode(num)
            pointer = pointer.next
            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
        return result.next