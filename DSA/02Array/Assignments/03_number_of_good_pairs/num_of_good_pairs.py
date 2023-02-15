#Link: https://leetcode.com/problems/number-of-good-pairs/
class Solution:
    def numIdenticalPairs(self, nums):
        d={}
        for n in nums:
            d[n]=1+d.get(n,0)
        ans=0
        for v in d.values():
            ans+=v*(v-1)//2

        return ans