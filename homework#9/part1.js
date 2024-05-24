//Stack: Implement a class for a stack data structure. Include methods for push, pop, and peek.

class Stack {
    constructor() {
        this.stack = [];
    }

    //push method adds a value to the end of the stack
    push(value) {
        this.stack.push(value);
    }

    //pop method removes the last value from the stack
    pop() {
        return this.stack.pop();
    }

    //peek method returns the last value in the stack
    peek() {
        return this.stack[this.stack.length - 1];
    }

    //isEmpty method checks if the stack is empty
    isEmpty() {
        return this.stack.length === 0;
    }
}

//Queue: Implement a class for a queue data structure. Include methods for enqueue, dequeue, and peek.
class Queue {
    constructor() {
        this.queue = [];
    }

    //enqueue method adds a value to the end of the queue
    enqueue(value) {
        this.queue.push(value);
    }

    //dequeue method removes the first value from the queue
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty.");
        }
        return this.queue.shift();
    }

    //peek method returns the first value in the queue
    peek() {
        return this.queue[0];
    }

    //isEmpty method checks if the queue is empty
    isEmpty() {
        return this.queue.length === 0;
    }
}

//Binary Tree: Implement a class for a binary tree data structure. Include methods for inserting nodes, searching for a node, and traversing the tree (e.g., in-order, pre-order, post-order).

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {

    constructor() {
        this.root = null;
    }

    //insert method inserts a new node into the binary tree
    insert(value) {
        const newNode = new TreeNode(value);

        //if the tree is empty, the new node becomes the root
        if (!this.root) {
            this.root = newNode;
            return;
        }

        //otherwise, find the correct position for the new node (by comparing values of nodes)
        let current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    //search method searches for a node with a specific value in the binary tree
    search(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) {
                return current;
            }
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return null;
    }

    //inOrderTraversal method traverses the binary tree in in-order fashion
    inOrderTraversal(node = this.root) {
        if (!node) {
            return;
        }
        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
    }

    //preOrderTraversal method traverses the binary tree in pre-order fashion
    preOrderTraversal(node = this.root) {
        if (!node) {
            return;
        }
        console.log(node.value);
        this.preOrderTraversal(node.left);
        this.preOrderTraversal(node.right);
    }

    //postOrderTraversal method traverses the binary tree in post-order fashion
    postOrderTraversal(node = this.root) {
        if (!node) {
            return;
        }
        this.postOrderTraversal(node.left);
        this.postOrderTraversal(node.right);
        console.log(node.value);
    }
}

//Graph: Implement a class for a graph data structure. Include methods for adding vertices and edges, performing depth-first search (DFS), and breadth-first search (BFS).

class Graph {
    constructor() {
        this.vertices = {};
    }

    //addVertex method adds a new vertex to the graph
    addVertex(vertex) {
        this.vertices[vertex] = [];
    }

    //addEdge method adds an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
            throw new Error("Both vertices must exist in the graph.");
        }
        this.vertices[vertex1].push(vertex2);
        this.vertices[vertex2].push(vertex1);
    }

    //depthFirstSearch method performs depth-first search starting from a given vertex
    depthFirstSearch(startingVertex) {
        const visited = {};
        const result = [];

        const dfs = (vertex) => {
            //mark the current vertex as visited and add it to the result
            visited[vertex] = true;
            result.push(vertex);

            //for each neighbor of the current vertex, if it has not been visited, perform dfs on it
            this.vertices[vertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                }
            });
        };

        dfs(startingVertex);
        return result;
    }

    //breadthFirstSearch method performs breadth-first search starting from a given vertex
    breadthFirstSearch(startingVertex) {
        const visited = {};
        const result = [];

        //create a queue to keep track of vertices to visit, usage of the Queue class defined above!
        const queue = new Queue();

        // mark the starting vertex as visited
        visited[startingVertex] = true;
        queue.enqueue(startingVertex);

        while (!queue.isEmpty()) {
            const currentVertex = queue.dequeue();
            result.push(currentVertex);

            this.vertices[currentVertex].forEach((neighbor) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.enqueue(neighbor);
                }
            });
        }

        return result;
    }
}

//Linked List: Implement a class for a singly linked list data structure. Include methods for inserting nodes, deleting nodes, and searching for a node.

class LinkNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }

    //insert method inserts a new node at the end of the linked list
    insert(value) {
        const newNode = new LinkNode(value);

        //if the list is empty, the new node becomes the head
        if (!this.head) {
            this.head = newNode;
            return;
        }

        //otherwise, find the last node and append the new node to it
        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        current.next = newNode;
    }

    //delete method deletes the first node with a specific value from the linked list
    delete(value) {
        //if the list is empty, return
        if (!this.head) {
            return;
        }

        //if the head node has the value, update the head to the next node
        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        //otherwise, find the node with the value and update the next pointer of the previous node
        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    //search method searches for a node with a specific value in the linked list
    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return null;
    }
}

module.exports = {
    Stack,
    Queue,
    BinaryTree,
    Graph,
    LinkedList,
    TreeNode
};