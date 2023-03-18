//Link:https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/practice-problems/algorithm/monk-and-nice-strings-3/editorial/
class Solution {
public:
	vector<int> niceStrings(vector<string>& A) {
		// Your code goes here
		int n=A.size();
		string arr[1010];
		arr[0] = "A";
		vector<int> ans;
		for(int i=1; i<=n; i++){
			string str=A[i-1];
			int j;
			for(j=i-1; j>=0; j--){
				if(arr[j] >= str){
					arr[j+1] = arr[j];
				}
				else break;
			}
			ans.push_back(j);
			arr[j+1] = str;
	}
	return ans;
	}
};