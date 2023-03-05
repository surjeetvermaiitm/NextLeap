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
SinglyLinkedListNode* getLoopstart(SinglyLinkedListNode *loop_node, SinglyLinkedListNode *head)
{
    SinglyLinkedListNode *ptr1 = loop_node;
    SinglyLinkedListNode *ptr2 = loop_node;
 
    // Count the number of nodes in loop
    unsigned int k = 1, i;
    while (ptr1->next != ptr2)
    {
        ptr1 = ptr1->next;
        k++;
    }
 
    // Fix one pointer to head
    ptr1 = head;
 
    // And the other pointer to k nodes after head
    ptr2 = head;
    for (i = 0; i < k; i++)
        ptr2 = ptr2->next;
 
    /* Move both pointers at the same pace,
    they will meet at loop starting node */
    while (ptr2 != ptr1)
    {
        ptr1 = ptr1->next;
        ptr2 = ptr2->next;
    }
    return ptr1;
}
 
/* This function detects and find loop starting
  node  in the list*/
SinglyLinkedListNode* detectAndgetLoopstarting(SinglyLinkedListNode *head)
{
    SinglyLinkedListNode *slow_p = head, *fast_p = head,*loop_start;
 
    //Start traversing list and detect loop
    while (slow_p && fast_p && fast_p->next)
    {
        slow_p = slow_p->next;
        fast_p = fast_p->next->next;
 
        /* If slow_p and fast_p meet then find
           the loop starting node*/
        if (slow_p == fast_p)
        {
            loop_start = getLoopstart(slow_p, head);
            break;
        }
    }
 
    // Return starting node of loop
    return loop_start;
}
bool isPalindromeUtil(SinglyLinkedListNode *head, SinglyLinkedListNode* loop_start)
{
    SinglyLinkedListNode *ptr = head;
    stack<int> s;
 
    // Traverse linked list until last node is equal
    // to loop_start and store the elements till start
    // in a stack
    int count = 0;
    while (ptr != loop_start || count != 1)
    {
        s.push(ptr->data);
        if (ptr == loop_start)
            count = 1;
        ptr = ptr->next;
    }
    ptr = head;
    count = 0;
 
    // Traverse linked list until last node is
    // equal to loop_start second time
    while (ptr != loop_start || count != 1)
    {
        // Compare data of node with the top of stack
        // If equal then continue
        if (ptr->data == s.top())
            s.pop();
 
        // Else return false
        else
            return false;
 
        if (ptr == loop_start)
            count = 1;
        ptr = ptr->next;
    }
 
    // Return true if linked list is palindrome
    return true;
}
 
	bool isPalindrome(SinglyLinkedListNode* & head) {
		// Your code goes here
        SinglyLinkedListNode* loop_start = detectAndgetLoopstarting(head);
 
    // Check if linked list is palindrome
    return isPalindromeUtil(head, loop_start);
	}
};