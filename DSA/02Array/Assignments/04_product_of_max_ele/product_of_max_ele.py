class Solution:
    def maxProduct(self, nums: List[int]) -> int:
        m1=-float("inf")
        m2=-float("inf")
        for n in nums:
            if m1<n:
                m2=m1
                m1=n
            elif m2<n:
                m2=n

        return (m1-1)*(m2-1)