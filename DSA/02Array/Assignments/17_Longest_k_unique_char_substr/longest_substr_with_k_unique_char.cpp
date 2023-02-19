#Link: https://practice.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1
class Solution {
public:

bool isValid(int count[], int k)
{
    int val = 0;
    for (int i=0; i<26; i++){
		if (count[i] > 0){
			val++;
		}
	}
    return (k >= val);
}
 
int longestKSubstr(string s, int k)
{
    int u = 0; 
    int n = s.length();
    int count[26];
    memset(count, 0, sizeof(count));

    for (int i=0; i<n; i++)
    {
        if (count[s[i]-'a']==0){
				u++;
		}  
        count[s[i]-'a']++;
    }
 
    if (u < k)
    {
        return -1;
    }
 
    int curr_start = 0, curr_end = 0;
 
    int max_window_size = 1, max_window_start = 0;
 
    memset(count, 0, sizeof(count));
 
    count[s[0]-'a']++;  
    for (int i=1; i<n; i++)
    {

        count[s[i]-'a']++;
        curr_end++;
        while (!isValid(count, k))
        {
            count[s[curr_start]-'a']--;
            curr_start++;
        }
 
        if (curr_end-curr_start+1 > max_window_size)
        {
            max_window_size = curr_end-curr_start+1;
            max_window_start = curr_start;
        }
    }
 
    return  max_window_size;
}
};