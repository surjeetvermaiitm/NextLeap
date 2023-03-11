#Link: https://leetcode.com/problems/number-of-recent-calls/

class RecentCounter:

    def __init__(self):
        self.dq = collections.deque()

    def ping(self, t: int) -> int:
        self.dq.append(t)
        while self.dq[0] < t - 3000:
            self.dq.popleft()
        return len(self.dq)