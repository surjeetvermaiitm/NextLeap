class Solution:
	def bubbleSort(self, A: List[int]) -> int:
		count=0
		n=len(A)
		swapped=True
		while swapped is not False:
			swapped=False
			count+=1
			for i in range(0,n-1):
				if A[i]>A[i+1]:
					A[i],A[i+1]=A[i+1],A[i]
					swapped=True
		return count