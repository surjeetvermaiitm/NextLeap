//Link: https://leetcode.com/problems/reverse-nodes-in-k-group/description/

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    ListNode* reverseKGroup(ListNode* head, int k) {
        //base case
        ListNode* temp=head;
        int i=0;
        while(i<k){
            if(temp==NULL) return head;
            temp=temp->next;
            i++;
        }
        ListNode* curr=head;
        ListNode* prev=NULL;
        ListNode* nextnode;
        int count=0;
        while(curr!=NULL && count<k){
            nextnode=curr->next;
            curr->next=prev;
            prev=curr;
            curr=nextnode;
            count++;
        }
        if(nextnode!=NULL){
            head->next=reverseKGroup(nextnode,k);
        }
        return prev;    
            
            
    }
};