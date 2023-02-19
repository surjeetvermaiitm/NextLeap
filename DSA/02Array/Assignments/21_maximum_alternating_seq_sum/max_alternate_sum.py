#Link:https://leetcode.com/problems/maximum-alternating-subsequence-sum/description/

class Solution:
    def maxAlternatingSum(self, nums: List[int]) -> int:
        odd = even = 0
        for a in nums:
            odd, even = [max(odd, even - a), max(even, odd + a)]
        return even