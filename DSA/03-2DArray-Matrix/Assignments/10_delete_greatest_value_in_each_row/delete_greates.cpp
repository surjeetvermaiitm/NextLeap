//Link: https://leetcode.com/problems/delete-greatest-value-in-each-row/description/

class Solution 
{
public:
    int deleteGreatestValue(vector<vector<int>>& grid) 
    {
        int sum = 0;
        
        for (auto& row : grid) sort(row.begin(), row.end());
        
        for (int j = 0; j < grid[0].size(); ++j)
        {
            int n = 0;
            for (int i = 0; i < grid.size(); ++i)
                n = max(n, grid[i][j]);
            sum += n;
        }
        
        return sum;
    }
};