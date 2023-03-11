#Link: https://leetcode.com/problems/permutations/description/

class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res=[]
        
        # if (len(nums)==1):
        #     return [nums[:]]
        # for i in range(len(nums)):
        #     n=nums.pop(0)
        #     perms=self.permute(nums)
        #     for perm in perms:
        #         perm.append(n)
        #         res.append(perm)
        #     # res.extend(perms)
        #     nums.append(n)
        # return res
        n=len(nums)
        def f(i):
            if i==n:
                res.append(nums[:])
                return
            for idx in range(i,len(nums)):
                nums[i],nums[idx]=nums[idx],nums[i]
                f(i+1)
                nums[i],nums[idx]=nums[idx],nums[i]
        f(0)
        return res

