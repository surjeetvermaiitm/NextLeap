#Link: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/practice-problems/algorithm/maximum-sum-of-building-speed-00ab8996/

class Solution:
	def maxSum(self, nums: List[int]) -> int:
		# Your code goes here
		nums.sort()
		n=len(nums)
		t=0
		for i in range(n-2,-1,-2):
			t+=nums[i]
		return t
