#Link: https://leetcode.com/problems/count-good-meals/description/
class Solution:
	def countPairs(self, deliciousness: List[int]) -> int:
		# Your code goes here
		d={}
		ans=0
		for n in deliciousness:
			for i in range(0,22):
				ans+=d.get(2**i-n,0)
			d[n]=d.get(n,0)+1
		return ans % 1_000_000_007