#Link: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/description/

class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        res=[]
        # for i in range(len(nums)):
        #     ct=0
        #     for j in range(len(nums)):
        #         if j!=i and nums[i]>nums[j]:
        #             ct+=1
        #     res.append(ct)
        # return res

        arr=sorted(nums)
        m={}
        for i in range(len(arr)):
            if arr[i] not in m:
                m[arr[i]]=i

        for n in nums:
            res.append(m[n])
        return res
        