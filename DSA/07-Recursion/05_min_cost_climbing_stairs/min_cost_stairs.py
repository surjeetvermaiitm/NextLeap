#Link: https://leetcode.com/problems/min-cost-climbing-stairs/description/

class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
# if n<0: return INT_MAX
        
        def f(n,memo={}):
            if n<0:
                return 0
            if n==0 or n==1:
                memo[n]=cost[n]
                return memo[n]
            if n not in memo:
                memo[n]=cost[n]+min(f(n-1),f(n-2))
                return memo[n]
            return memo[n]
        n=len(cost)
        return min(f(n-1),f(n-2))
            
                
class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        if not cost:
            return 0
        
        cur=0
        dp0=cost[0]
        
        if len(cost) >= 2:
            dp1=cost[1]
        
        for i in range(2, len(cost)):
            cur=cost[i] + min(dp0,dp1)
            dp0=dp1
            dp1=cur
            
        return min(dp0,dp1)
                     
            
        