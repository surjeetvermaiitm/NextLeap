#Link: https://leetcode.com/problems/prison-cells-after-n-days/description/
class Solution:
    def prisonAfterNDays(self, cells: List[int], n: int) -> List[int]:
        for i in range((n - 1) % 14 + 1):
            cells = [0] + [cells[i - 1] ^ cells[i + 1] ^ 1 for i in range(1, 7)] + [0]
        return cells