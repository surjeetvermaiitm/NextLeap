#Link:https://leetcode.com/problems/find-the-highest-altitude/description/
class Solution:
    def largestAltitude(self, gain):
        ans=0
        gain_so_far=0
        for n in gain:
            gain_so_far+=n
            ans=max(ans,gain_so_far)
        return ans