#Link:https://www.interviewbit.com/problems/first-non-repeating-character-in-a-stream-of-characters/
class Solution:
	def firstNonRepeatingChar(self, s: str) -> str:
		st = []
		d = {}
		ans = ''
		for i in s:
			if i in d:
				if i in st:
					st.remove(i)
			else:
				st.append(i)
				d[i] = 0
			if st:
				ans += st[0]
			else:
				ans +='#'
		return ans