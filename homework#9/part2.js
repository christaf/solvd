//Min/Max Stack: Implement a class for a stack that supports finding the minimum and maximum elements in constant time (O(1)). Include methods for push, pop, getMin, and getMax.
const { Stack } = require('./part1.js');

class MinMaxStack {
    constructor() {
        this.stack = new Stack();
        this.minMaxStack = new Stack();
    }

    push(value) {
        //push the value to the stack
        this.stack.push(value);

        //if the minMaxStack is empty, push the value as the min and max
        if (this.minMaxStack.isEmpty()) {
            this.minMaxStack.push({ min: value, max: value });
        } else {
            //otherwise, get the last min and max values from the minMaxStack
            const lastMinMax = this.minMaxStack.peek();
            //push the new min and max values to the minMaxStack
            this.minMaxStack.push({
                min: Math.min(lastMinMax.min, value),
                max: Math.max(lastMinMax.max, value)
            });
        }
    }

    pop() {
        this.minMaxStack.pop();
        return this.stack.pop();
    }

    peek() {
        return this.stack.peek();
    }

    getMin() {
        return this.minMaxStack.peek().min;
    }

    getMax() {
        return this.minMaxStack.peek().max;
    }

    isEmpty() {
        return this.stack.isEmpty();
    }
}

//Binary Search Tree: Implement a function to determine if a binary tree is a binary search tree (BST). Provide an efficient algorithm that checks whether the tree satisfies the BST property.


function isBST(node, min = null, max = null) {

    //base case if the node is null
    if (!node) {
        return true;
    }

    //if the node value is less than the min or greater than the max, return false
    if ((min !== null && node.value <= min) || (max !== null && node.value >= max)) {
        return false;
    }

    //recursively check the left and right nodes
    if (!isBST(node.left, min, node.value) || !isBST(node.right, node.value, max)) {
        return false;
    }

    //if any of the conditions are not met, return true
    return true;

}

//Graph Algorithms: Implement algorithms to find the shortest path between two vertices in a graph using both Dijkstra's algorithm and Breadth-First Search (BFS).
//non-weighted graph

const { Graph, Queue } = require('./part1.js');

function dijkstraNonWeighted(graph, start) {
    const distances = {};
    const queue = new Queue();

    distances[start] = 0;
    queue.enqueue(start);

    while (!queue.isEmpty()) {
        const current = queue.dequeue();

        graph.vertices[current].forEach((neighbor) => {
            if (distances[neighbor] === undefined) {
                distances[neighbor] = distances[current] + 1;
                queue.enqueue(neighbor);
            } else {
                distances[neighbor] = Math.min(distances[neighbor], distances[current] + 1); //update the distance if a shorter path is found
            }
        });
    }

    return distances;
}
//Linked List Cycle: Implement a function to detect if a linked list has a cycle. Use Floyd's Cycle Detection Algorithm (Tortoise and Hare algorithm) to solve this problem efficiently.

function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        //move the slow pointer by one node
        slow = slow.next;
        //move the fast pointer by two nodes
        fast = fast.next.next;

        //if the slow and fast pointers meet, there is a cycle
        if (slow === fast) {
            return true;
        }
    }

    //if the fast pointer reaches the end of the list, there is no cycle
    return false;
}

module.exports = { MinMaxStack, isBST, dijkstraNonWeighted, hasCycle };