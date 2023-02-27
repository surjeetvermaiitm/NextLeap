#Link: https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/description/

class Solution:
    def oddCells(self, m: int, n: int, indices: List[List[int]]) -> int:
        row, col = [0] * m, [0] * n
        for [i,j] in indices:      
            row[i] ^= 1
            col[j] ^= 1 
        R, C = sum(row), sum(col)  
        return R*n + C*m - 2*R*C 