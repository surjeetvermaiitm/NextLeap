#Link: https://practice.geeksforgeeks.org/problems/common-elements1132/1
class Solution:
	def commonElements(self, A: List[int], B: List[int], C: List[int]) -> List[int]:
		# Your code goes here
		visit=set()
		st2=set(B)
		st3=set(C)
		ans=[]
		for n in A:
			if n in st2 and n in st3 and n not in visit:
				ans.append(n)
			visit.add(n)
		return ans