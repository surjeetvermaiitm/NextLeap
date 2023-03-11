//Link:https://leetcode.com/problems/n-th-tribonacci-number/description/

class Solution {
public:
    int tribonacci(int n) {
        vector<int> A(max(3,n+1));
        int i;
        A[0]=0;
        A[1]=1;
        A[2]=1;
        for(i=3;i<=n;i++){
            A[i]=A[i-1]+A[i-2]+A[i-3];
        }
        return A[n];
    }
};