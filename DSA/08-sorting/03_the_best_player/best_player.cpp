//Link:https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/practice-problems/algorithm/the-best-player-1/
class Solution {
public:
	vector<string> bestPlayer(vector<string>& name, vector<int>& quotient, int k) {
		// Your code goes here
		vector<pair<int,string>>v;
		int n=name.size();
		for(int i=0;i<n;i++){
			v.push_back({quotient[i],name[i]});
		}
		string q,w;
	vector<string> ans;
    sort(v.rbegin(),v.rend());

    for(int i = 0; i<v.size()-1; i++){

        if(v[i].first==v[i+1].first){

            int y,z,minn;

            y = v[i].second.size();

            z = v[i+1].second.size();

            minn = min(y,z);

            q = v[i].second;

            w = v[i+1].second;

            for(int j = 0; j<minn; j++){

                if(w[j]>q[j]){

                    v[i].second = v[i+1].second;

                    v[i+1].second = q;

                    break;

                }

                else if(q[j]>w[j]){

                    v[i].second = v[i+1].second;

                    v[i+1].second = q;

                    break;

                }

            }

            

        }

        

    }
	
    for(int i = 0; i<k; i++){

        ans.push_back(v[i].second);

    }
	return ans;
	}
};