#Link: https://leetcode.com/problems/missing-number/description/
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        n=len(nums)
        ans=0
        for i in range(len(nums)+1):
            ans^=i
        for n in nums:
            ans^=n
        return ans

        # total= n*(n+1)//2
        # ans=total-sum(nums)
        # return ans
