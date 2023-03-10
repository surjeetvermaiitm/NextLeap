#Link: https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/description/

class Solution:
    def numPairsDivisibleBy60(self, time: List[int]) -> int:
        c = [0] * 60
        res = 0
        for t in time:
            res += c[-t % 60]
            c[t % 60] += 1
        return res