#Link: https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/description/
class Solution:
    def countKDifference(self, nums: List[int], k: int) -> int:
        m={n:nums.count(n) for n in nums}
        ans=0
        for key,v in m.items():
            if key+k in m:
                ans+=m[key]*m[key+k]
        return ans