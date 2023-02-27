# https://leetcode.com/problems/richest-customer-wealth/description/

class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        ans=0
        for ele in accounts:
            ans=max(ans,sum(ele))
        return ans