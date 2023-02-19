//Link:https://www.geeksforgeeks.org/find-common-elements-three-sorted-arrays/
class Solution {
public:
	vector<int> arraysIntersection(vector<int>& a, vector<int>& b, vector<int>& c) {
		// Your code goes here
		int n1=a.size();
		int n2=b.size();
		int n3=c.size();
		unordered_set<int> uset, uset2, uset3;
		vector<int> ans;
    for (int i = 0; i < n1; i++) {
        uset.insert(a[i]);
    }
    for (int i = 0; i < n2; i++) {
        uset2.insert(b[i]);
    }
    // checking if elements of 3rd array are present in
    // first 2 sets
    for (int i = 0; i < n3; i++) {
        if (uset.find(c[i]) != uset.end()
            && uset2.find(c[i]) != uset.end()) {
            // using a 3rd set to prevent duplicates
            if (uset3.find(c[i]) == uset3.end())
                ans.push_back(c[i]);
            uset3.insert(c[i]);
        }
    }
	return ans;
	}
};