//Link: https://www.geeksforgeeks.org/pair-with-largest-sum-which-is-less-than-k-in-the-array/
class Solution {
public:
	int twoSumLessThanK(vector<int>& arr, int k) {
		// Your code goes here
		sort(arr.begin(), arr.end());
    int n = arr.size(), l = 0, r = n - 1, ans = -1;
 
    // While l is less than r
    while (l < r) {
        if (arr[l] + arr[r] < k) {
            ans = max(ans, arr[l] + arr[r]);
            l++;
        }
        else {
            r--;
        }
    }
 
    return ans;
	}
};