#Link: https://practice.geeksforgeeks.org/problems/find-the-closest-pair-from-two-arrays4215/1

class Solution:
	def closestPair(self, nums1: List[int], nums2: List[int], k: int) -> int:
		# Your code goes here
		i=0
		j=len(nums2)-1
		ans=float("inf")
		while i<len(nums1) and j>=0:
			ans=min(ans,abs(nums1[i]+nums2[j]-k))
			if nums1[i]+nums2[j]>k:
				j-=1
			else:
				i+=1
		return ans

class Solution:
    def printClosest (self,arr, brr, n, m, x) : 
        #code here
        i=0
		j=len(brr)-1
		ans=float("inf")
		while i<len(arr) and j>=0:
		    if ans>abs(arr[i]+brr[j]-x):
		        l_i=i
		        r_j=j
		        ans=abs(arr[i]+brr[j]-x)
# 			ans=min(ans,abs(arr[i]+brr[j]-x))
			if arr[i]+brr[j]>x:
				j-=1
			else:
				i+=1
		return [arr[l_i],brr[r_j]]
