class Solution:
	def previousGreaterElement(self, arr: List[int]) -> List[int]:
		# Your code goes here
		n=len(arr)
		ans=[]
		s = list();
		s.append(arr[0])

		ans.append(-1)

		for i in range(1, n):

			while (len(s) > 0 and s[-1] < arr[i]):
				s.pop()

			if len(s) == 0:
				ans.append(-1)
			else:
				ans.append(s[-1])
	
			s.append(arr[i])
		return ans