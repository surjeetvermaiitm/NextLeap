//Link: https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/practice-problems/algorithm/save-patients/?purpose=login&source=problem-page&update=google
class Solution {
public:
	bool savePatients(vector<int>& vaccine, vector<int>& midichlorians) {
		// Your code goes here
		sort(vaccine.begin(),vaccine.end());
		sort(midichlorians.begin(),midichlorians.end());
		for(int i=0;i<vaccine.size();i++){
			if (vaccine[i]<=midichlorians[i]){
				return false;
			}
		}
		return true;
	}
};