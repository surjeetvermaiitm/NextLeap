#Link: https://leetcode.com/problems/running-sum-of-1d-array/description/

class Solution:
    def runningSum(self, nums: List[int]) -> List[int]:
        res=[]
        sum_so_far=0
        for n in nums:
            sum_so_far+=n
            res.append(sum_so_far)
        return res