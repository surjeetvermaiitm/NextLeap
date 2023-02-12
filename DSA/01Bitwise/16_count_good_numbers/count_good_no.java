class Solution {
	private static final int MOD = 1_000_000_007;
    public int countGoodNumbers(long n) {
        long good = n % 2 == 0 ? 1 : 5;
        for (long i = n / 2, x = 4 * 5; i > 0; i /= 2, x = x * x % MOD) {
            if (i % 2 != 0) {
                good = good * x % MOD;
            }
        }
        return (int)good;
    }
}