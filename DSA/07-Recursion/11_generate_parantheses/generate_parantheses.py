#Link: https://leetcode.com/problems/generate-parentheses/description/
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        ans=[]
        def dfs(open,close,res):
            if open==0 and close==0:
                ans.append(res)
                return
            if open>0:
                dfs(open-1,close,res+"(")
            if close>0:
                if open<close:
                    dfs(open,close-1,res+")")
        dfs(n,n,"")
        return ans
        
