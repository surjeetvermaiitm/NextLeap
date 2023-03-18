#Link: https://leetcode.com/problems/top-k-frequent-elements/description/

class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        # m={n:nums.count(n) for n in nums}
        # m=dict(sorted(m.items(),reverse=True,key=lambda x:x[1]))
        # ans=[]
        # for key,v in m.items():
        #     if k>0:
        #         ans.append(key)
        #     else:
        #         break
        #     k-=1
        # return ans
        ans=[]
        n=len(nums)
        m={}
        for ele in nums:
            m[ele]=1+m.get(ele,0)

        # freq=[[] for i in range(n+1)]
        # for key,val in m.items():
        #     freq[val].append(key)
        
        # for i in range(n,0,-1):
        #     for key in freq[i]:
        #         ans.append(key)
        #     if len(ans)==k:
        #         return ans


        # return [num for num, _ in Counter(nums).most_common(k)]
        freq=[]
        for key,val in m.items():
            freq.append((-val,key))
        heapq.heapify(freq)
        for i in range(k):
            ans.append(heapq.heappop(freq)[1])
        return ans




    
        



        