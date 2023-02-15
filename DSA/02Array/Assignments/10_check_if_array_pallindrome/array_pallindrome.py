class Solution:
    def isPalindrome(self, nums):
        i=0
        j=len(nums)-1
        while i<=j:
            if (nums[i]!=nums[j]):
                return False
            i+=1
            j-=1

        return True