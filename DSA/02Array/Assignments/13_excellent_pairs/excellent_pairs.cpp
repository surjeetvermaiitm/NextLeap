class Solution {
public:
    long long countExcellentPairs(vector<int>& nums, int k) {
    long long cnt[30] = {}, res = 0;
    for (int n : unordered_set<int>(begin(nums), end(nums)))
        ++cnt[__builtin_popcount(n)];
    for (int i = 1; i < 30; ++i)
        for (int j = max(i, k - i); j < 30; ++j)
            res += cnt[i] * cnt[j] * (i == j ? 1 : 2);
    return res;
}
};