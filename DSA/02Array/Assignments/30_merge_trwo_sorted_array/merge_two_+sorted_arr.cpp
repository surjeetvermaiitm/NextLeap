class Solution {
public:
	vector<int> merge(vector<int>& arr1, vector<int>& arr2) {
		int i = 0, j = 0, k = 0;
		int n1=arr1.size();
		int n2=arr2.size();
		vector<int> arr3(n1+n2);
    while (i<n1 && j <n2)
    {

        if (arr1[i] < arr2[j])
            arr3[k++] = arr1[i++];
        else
            arr3[k++] = arr2[j++];
    }
  
    // Store remaining elements of first array
    while (i < n1)
        arr3[k++] = arr1[i++];
  
    // Store remaining elements of second array
    while (j < n2)
        arr3[k++] = arr2[j++];
	
	return arr3;
	}
	
};