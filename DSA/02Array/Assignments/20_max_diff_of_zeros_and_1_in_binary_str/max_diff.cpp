//Link:https://www.geeksforgeeks.org/maximum-difference-zeros-ones-binary-string-set-2-time/
class Solution {
public:
 
int getMaxDifference(string str)
{
    int current_sum = 0;
    int max_sum = 0;
	int n=str.size();
 
    // traverse a binary string from left
    // to right
    for (int i = 0; i < n; i++) {
 
        // add current value to the current_sum
        // according to the Character
        // if it's '0' add 1 else -1
        current_sum += (str[i] == '0' ? 1 : -1);
 
        if (current_sum < 0)
            current_sum = 0;
 
        // update maximum sum
        max_sum = max(current_sum, max_sum);
    }
 
    // return -1 if string does not contain
    // any zero that means all ones
    // otherwise max_sum
    return max_sum == 0 ? -1 : max_sum;
}


};