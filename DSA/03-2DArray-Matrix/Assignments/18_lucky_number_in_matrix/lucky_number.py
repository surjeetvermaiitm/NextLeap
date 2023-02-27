#Link: https://leetcode.com/problems/lucky-numbers-in-a-matrix/

class Solution:
    def luckyNumbers (self, matrix: List[List[int]]) -> List[int]:
        rows, cols = len(matrix), len(matrix[0])
        def isMin(candidate, c):
            for r in range(rows):
                if matrix[r][c] > candidate:
                    return False
            return True
        ans=[]
        for r in range(rows):
            min_elem, ind = matrix[r][0], 0
            for c in range(cols):
                if matrix[r][c] < min_elem:
                    min_elem = matrix[r][c]
                    ind = c
            if isMin(min_elem, ind):
                ans.append(matrix[r][ind])
        return ans