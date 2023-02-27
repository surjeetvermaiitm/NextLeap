//Link:https://leetcode.com/problems/flipping-an-image/description/
class Solution {
public:
    vector<vector<int>> flipAndInvertImage(vector<vector<int>>& image) {
        for (auto& row : image) {
            reverse(row.begin(), row.end());
            for (auto& v : row) v ^= 1;
        }
        return image;
    }
};