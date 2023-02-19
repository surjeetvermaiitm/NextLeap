#Link: https://leetcode.com/problems/maximum-subarray/
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        ans=nums[0]
        curr_sum=nums[0]
        for i in range(1,len(nums)):
            curr_sum=max(nums[i],curr_sum+nums[i])
            ans=max(ans,curr_sum)
        return ans