/*
class SinglyLinkedListNode {
    public:
        int data;
        SinglyLinkedListNode* next;

        SinglyLinkedListNode() {
            this->data = 0;
            this->next = NULL;
        }

        SinglyLinkedListNode(int data) {
            this->data = data;
            this->next = NULL;
        }

        SinglyLinkedListNode(int data, SinglyLinkedListNode* next) {
            this->data = data;
            this->next = next;
        }
};*/

class Solution {
public:
        int countLoopNodespoint(SinglyLinkedListNode *n) {
                    int res = 1;
                    SinglyLinkedListNode *temp = n;
                    while (temp->next != n) {
                        
                        res++;
                        temp = temp->next;
                    }
                    return res;
        }

        int countLoopNode(SinglyLinkedListNode *list) {
        
        SinglyLinkedListNode *slowPtr = list, *fastPtr = list;
        while (slowPtr && fastPtr && fastPtr->next) {
            slowPtr = slowPtr->next;
            fastPtr = fastPtr->next->next;

            if (slowPtr == fastPtr)
                return countLoopNodespoint(slowPtr);
        }
        return 0;
        }
	int countNodesinLoop(SinglyLinkedListNode* & head) {
		// Your code goes here
        return countLoopNode(head);
    }
};