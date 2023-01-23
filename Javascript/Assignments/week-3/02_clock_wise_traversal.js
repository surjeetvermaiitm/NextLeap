class Solution {
  /**
   * @param {number[][]} arr
   * @return {string}
   */
  clockwiseTraversal(arr) {
    // Your code goes here
    let m = arr.length;
    let n = arr[0].length;
    let r = 0,
      c = 0;
    let i;
    let ans = "";
    for (i = 0; i < n - 1; i++) {
      ans += `${arr[0][i]} `;
    }
    for (i = 0; i < m - 1; i++) {
      ans += `${arr[i][n - 1]} `;
    }
    for (i = n - 1; i > 0; i--) {
      ans += `${arr[m - 1][i]} `;
    }
    for (i = m - 1; i > 0; i--) {
      ans += `${arr[i][0]} `;
    }
    /*
        while(r<m && c<n){
            for(i=c;i<n;i++){
                ans+=`${arr[r][i]} `;
            }
            r++;
            for(i=r;i<m;i++){
                ans+=`${arr[i][n-1]} `;
            }
            n--;
            if(r<m){
                for(i=n-1;i>=c;i--){
                    ans+=`${arr[m-1][i]} `;
                }
                m--;
            }
            if(c<n){
                for(i=m-1;i>=r;i--){
                    ans+=`${arr[i][c]} `;
                }
                c++;
            }
        }*/
    return ans.trim();
  }
}
