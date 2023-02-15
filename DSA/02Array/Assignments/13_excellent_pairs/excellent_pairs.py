#Link: https://leetcode.com/problems/number-of-excellent-pairs/description/

# class Solution:
#     def countExcellentPairs(self, nums: List[int], k: int) -> int:
#         c = Counter(map(int.bit_count, set(nums)))
#         return sum(c[k1] * c[k2] for k1 in c for k2 in c if k1 + k2 >= k)

class Solution:
    def countExcellentPairs(self, nums: List[int], k: int) -> int:
        c = Counter(map(lambda n:n.bit_count(), set(nums)))
        return sum(c[k1] * c[k2] for k1 in c for k2 in c if k1 + k2 >= k)