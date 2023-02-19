//Link: https://leetcode.com/problems/move-zeroes/description/

class Solution {
public:
    void moveZeroes(vector<int>& nums) {
        int n=nums.size(),i,j;
        i=-1;
        j=0;
        while(j<n){
            if(nums[j]==0) j++;
            else{
                i++;
                swap(nums[i],nums[j]);
                j++;
            }
        }
    }
};