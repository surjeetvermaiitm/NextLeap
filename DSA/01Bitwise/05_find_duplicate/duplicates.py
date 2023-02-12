#Link:https://leetcode.com/problems/find-the-duplicate-number/description/
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        # ans=0
        # for i in range(len(nums)):
        #     ans^=i
        # for n in nums:
        #     ans^=n
        # return ans
        # st=set()
        # for i in range(len(nums)):
        #     for n in nums:
        #         if n in st:
        #             return n
        #         else:
        #             st.add(n)
        for i in range(len(nums)):
            if nums[abs(nums[i])]>0:
                nums[abs(nums[i])]=-1*nums[abs(nums[i])]
            else:
                return abs(nums[i])
             