#Link:https://leetcode.com/problems/get-maximum-in-generated-array/description/
class Solution:
    def getMaximumGenerated(self, n: int) -> int:
        nums = [0]*(n+2)
        nums[1] = 1
        for i in range(2, n+1):
            nums[i] = nums[i//2] + nums[(i//2)+1] * (i%2)
    
        return max(nums[:n+1])