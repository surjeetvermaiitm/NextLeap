class Solution {
   public:
   vector <int> reverseArray(vector <int> &arr) {
     // Your code goes here
     reverse(arr.begin(),arr.end());
     return arr;
   }
};