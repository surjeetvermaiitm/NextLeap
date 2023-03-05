#Link: https://leetcode.com/problems/next-greater-element-i/description/

class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        ans=[]
        for n1 in nums1:
            ind=nums2.index(n1)
            i=ind
            while i<len(nums2):
                if n1<nums2[i]:
                    ans.append(nums2[i])
                    break
                else:
                    i+=1
            if i==len(nums2):
                ans.append(-1)
        return ans