#Link: https://leetcode.com/problems/sliding-window-maximum/
from collections import deque

class Solution:
    def maxOfSubArray(self,nums, k):
        output=[]
        l,r=0,0
        q=deque()
        while r<len(nums):
            while q and nums[q[-1]]<nums[r]:
                q.pop()
            q.append(r)
            #remove left val from window
            if l>q[0]:
                q.popleft()
            if (r+1)>=k:
                output.append(nums[q[0]])
                l+=1
            r+=1
        return output