//Link:
class Solution {
public:
	vector<int> previousSmallerElement(vector<int>& arr) {
		vector<int> ans;
		// Your code goes here
		stack<int> S;
	int n=arr.size();
    for (int i=0; i<n; i++)
    {

        while (!S.empty() && S.top() >= arr[i])
            S.pop();

        if (S.empty())
            ans.push_back(-1);
        else  //Else print the nearest smaller element
            ans.push_back(S.top());
 
        // Push this element
        S.push(arr[i]);
    }
	return ans;
	}
};