class Solution:
	def getOddOccurrence(self, arr: List[int]) -> int:
		# Your code goes here
		ans=0
		for n in arr:
			ans^=n
		return ans