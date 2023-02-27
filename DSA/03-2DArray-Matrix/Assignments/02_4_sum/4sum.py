class Solution:
    def threeSum(self, nums,target):
        nums.sort()
        res=[]
        n=len(nums)
        for i in range(n):
            if i>0 and nums[i]==nums[i-1]:
                continue
            j=i+1
            k=n-1
            while j<k:
                if nums[i]+nums[j]+nums[k]==target:
                    res.append([nums[i],nums[j],nums[k]])
                    while j<k and nums[j]==nums[j+1]:
                        j+=1
                    while k>j and nums[k]==nums[k-1]:
                        k-=1
                    j+=1
                    k-=1
                elif nums[i]+nums[j]+nums[k]<target:
                    j+=1
                else:
                    k-=1
                
        return res
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        results = []
        nums.sort()
        for i in range(len(nums)-3):
            if i == 0 or nums[i] != nums[i-1]:
                threeResult = self.threeSum(nums[i+1:], target-nums[i])
                for item in threeResult:
                    results.append([nums[i]] + item)
        return results