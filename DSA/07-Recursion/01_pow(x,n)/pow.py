#Link: https://leetcode.com/problems/powx-n/description/

class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n<0:
            return self.myPow(1/x,-1*n)
        if n==0:
            return 1
        if n==1:
            return x
        p=self.myPow(x,n//2)
        if n%2==0:
            return p*p
        else:
            return p*p*x