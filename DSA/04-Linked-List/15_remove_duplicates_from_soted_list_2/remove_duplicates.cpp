//Link: https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/description/

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
    ListNode* deleteDuplicates(ListNode* head) {
        if(head == NULL || head->next == NULL){
            return head;
        }
        
        ListNode *nextH = head->next;
        if(head->val != nextH->val){
            ListNode *tempH = deleteDuplicates(nextH);
            head->next = tempH;
            return head;
        }else{
            while(nextH != NULL && head->val == nextH->val){
                nextH = nextH->next;
            }
            head = nextH;
            ListNode *tempH = deleteDuplicates(nextH);
            return tempH;
        } 
    }
};