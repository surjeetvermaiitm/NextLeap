class Solution {
public:
	vector<int> nextSmallerElement(vector<int>& arr) {
		vector<int> ans;
		stack<int> s;
		int n=arr.size();
   s.push(arr[0]);
   for (int i = 1; i < n; i++) {
      if (s.empty()) {
         s.push(arr[i]);
         continue;
      }
      while (!s.empty() && s.top() > arr[i]) {
         ans.push_back(arr[i]);
         s.pop();
      }
      s.push(arr[i]);
   }
   while (!s.empty()) {
      ans.push_back(-1);
      s.pop();
   }
   return ans;
	}
};