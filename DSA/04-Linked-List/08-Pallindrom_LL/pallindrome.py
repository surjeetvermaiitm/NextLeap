#Link: https://leetcode.com/problems/palindrome-linked-list/

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseLL(self,head):
            pre=None
            next=None
            while(head!=None):
                next=head.next
                head.next=pre
                pre=head
                head=next
            
            return pre
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        
        if (head==None or head.next==None):
            return True
        slow=head
        fast=head
        while(fast.next!=None and fast.next.next!=None):
            slow=slow.next
            fast=fast.next.next
        
        slow.next=self.reverseLL(slow.next)
        slow=slow.next
        while(slow!=None):
            if(head.val!=slow.val):
                return False
            head=head.next
            slow=slow.next
        
        return True