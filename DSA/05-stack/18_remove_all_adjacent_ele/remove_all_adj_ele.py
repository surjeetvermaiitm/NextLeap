#Link:https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/

class Solution:
    def removeDuplicates(self, s: str) -> str:
        st=[]
        for ele in s:
            if len(st)!=0:
                if st[-1]==ele:
                    st.pop()
                else:
                    st.append(ele)
            else:
                st.append(ele)
        return "".join(st)