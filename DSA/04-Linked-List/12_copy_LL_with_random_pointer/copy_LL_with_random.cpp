//Link: https://leetcode.com/problems/copy-list-with-random-pointer/description/

/*
// Definition for a Node.
class Node {
public:
    int val;
    Node* next;
    Node* random;
    
    Node(int _val) {
        val = _val;
        next = NULL;
        random = NULL;
    }
};
*/

class Solution {
public:
    unordered_map<Node*,Node*> visited;
    Node* copyRandomList(Node* head) {
        
        if(head==NULL) return NULL;
        if(visited.find(head)!=visited.end()){
            return visited[head];
        }
        Node* node=new Node(head->val);
        visited[head]=node;
        node->next=copyRandomList(head->next);
        node->random=copyRandomList(head->random);
        return node;
    }
};