#link: https://leetcode.com/problems/maximum-product-difference-between-two-pairs/description/
class Solution:
    def maxProductDifference(self, nums: List[int]) -> int:
        m1=-float("inf")
        m2=-float("inf")
        l1=float("inf")
        le=float("inf")
        for n in nums:
            if m1<n:
                m2=m1
                m1=n
            elif m2<n:
                m2=n
            if l1>n:
                l2=l1
                l1=n
            elif l2>n:
                l2=n

        return m1*m2-l1*l2