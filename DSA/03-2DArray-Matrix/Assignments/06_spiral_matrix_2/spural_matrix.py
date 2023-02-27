#Link: https://leetcode.com/problems/spiral-matrix-ii/description/

class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        matrix = [[0 for x in range(n)] for y in range(n)]
        

        num = 1
        top = 0 
        right = n - 1 
        down = n - 1
        left = 0 

        while left <= right and top <= down: 
            #top row
            for i in range(left, right+1):
                matrix[top][i] = num
                num += 1
            top += 1
            #right col
            for i in range(top, down+1):
                matrix[i][right] = num 
                num += 1 
            right -= 1 
            #bottom row
            for i in range(right, left-1, -1): 
                matrix[down][i] = num
                num += 1 
            down -= 1 

            # left col
            for i in range(down, top-1, -1): 
                matrix[i][left] = num 
                num += 1
            left += 1 

        return matrix