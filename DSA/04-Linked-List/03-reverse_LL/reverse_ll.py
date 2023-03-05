#Link: https://leetcode.com/problems/reverse-linked-list/description/

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head==None or head.next==None:
            return head
        # recursive
        # new_head=self.reverseList(head.next)
        # head.next.next=head
        # head.next=None
        # return new_head
        # iterative
        ptr=head
        prev=None
        curr=ptr
        while curr:
            new_next=curr.next
            curr.next=prev
            prev=curr
            curr=new_next
        return prev