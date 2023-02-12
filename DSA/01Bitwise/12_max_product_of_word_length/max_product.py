#Link: https://leetcode.com/problems/maximum-product-of-word-lengths/description/

class Solution:
    def maxProduct(self, words: List[str]) -> int:
        d = {}
        for w in words:
            mask = 0
            for c in set(w):
                mask |= (1 << (ord(c) - 97))
            d[mask] = max(d.get(mask, 0), len(w))
        return max([d[x] * d[y] for x in d for y in d if not x & y] or [0])

# class Solution:
#     def maxProduct(self, words: List[str]) -> int:
#         d, ans = defaultdict(int), 0
#         for word in words:
#             for l in word:
#                 d[word] |= 1<<(ord(l) - 97)
                
#         for w1, w2 in combinations(d.keys(), 2):
#             if d[w1] & d[w2] == 0: 
#                 ans = max(ans, len(w1)*len(w2))
                
#         return ans

from itertools import combinations 
class Solution:
	def maxProduct(self, words: List[str]) -> int:
		# Your code goes here
		d= {}
		ans=0
		for word in words:
			for l in word:
				d[word] = 1<<(ord(l) - 97) | d.get(word,0)

		for w1, w2 in combinations(d.keys(), 2):
			if d.get(w1,0) & d.get(w2,0) == 0: 
				ans = max(ans, len(w1)*len(w2))
		return ans

