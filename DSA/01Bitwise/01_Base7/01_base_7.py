#Link : https://leetcode.com/problems/base-7/

class Solution:
    def convertToBase7(self, num: int) -> str:
        n=abs(num) 
        res = ""
        while n:
            res = str(n % 7) + res
            n =n//7
        return '-' * (num < 0) + res or "0"