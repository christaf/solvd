//Usage Demonstration: Create instances of your data structures and demonstrate their usage with sample data. Show how the algorithms you implemented can solve practical problems using these data structures.

const { Graph, Queue, BinaryTree, LinkedList, Stack } = require('./part1.js');
const { MinMaxStack, hasCycle, dijkstraNonWeighted, isBST } = require('./part2.js');

const linkedListExample = () => {
    //create a new linked list
    let linkedList = new LinkedList();
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);

    //search for a node with value 3
    console.log(linkedList.search(3)); //output: Node { value: 3, next: Node { value: 4, next: Node { value: 5, next: null } } }

    //delete a node with value 3
    linkedList.delete(3);
    console.log(linkedList.search(3)); //output: null
}

const binaryTreeExample = () => {


    //create a new binary tree
    let binaryTree = new BinaryTree(1);
    binaryTree.insert(2);
    binaryTree.insert(3);
    binaryTree.insert(4);
    binaryTree.insert(5);

    let binaryTree2 = new BinaryTree(2);
    binaryTree2.insert(1);
    binaryTree2.insert(3);

    //check if the binary tree is a binary search tree
    console.log(isBST(binaryTree)); //output: false
    console.log(isBST(binaryTree2)); //output: true
}

const graphExample = () => {

    //create a new graph
    let graph = new Graph();
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);
    graph.addVertex(4);
    graph.addVertex(5);

    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 4);
    graph.addEdge(3, 5);


    //find the shortest path using Dijkstra's algorithm
    console.log(dijkstraNonWeighted(graph, 1)); //output: { '1': 0, '2': 1, '3': 1, '4': 2, '5': 2 }
}

cycleExample = () => {
    //create a linked list with a cycle
    let head = new LinkedList();
    let node1 = new LinkedList();
    let node2 = new LinkedList();
    let node3 = new LinkedList();

    head.next = node1;
    node1.next = node2;
    node2.next = node3;
    node3.next = node1;

    console.log(hasCycle(head)); //output: true

    //create a linked list without a cycle
    let head2 = new LinkedList();
    let node4 = new LinkedList();
    let node5 = new LinkedList();
    let node6 = new LinkedList();

    head2.next = node4;
    node4.next = node5;
    node5.next = node6;

    console.log(hasCycle(head2)); //output: false
}

const minMaxStackExample = () => {
    //create a new stack
    let stack = new MinMaxStack();

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);

    console.log(stack.peek()); //output: 5
    console.log(stack.pop()); //output: 5
    console.log(stack.getMin()); //output: 1
    console.log(stack.getMax()); //output: 4
}

const queueExample = () => {
    //create a new queue
    let queue = new Queue();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);

    console.log(queue.peek()); //output: 1
    console.log(queue.dequeue()); //output: 1
    console.log(queue.peek()); //output: 2
    console.log(queue.isEmpty()); //output: false

    console.log(queue.dequeue()); //output: 2
    console.log(queue.dequeue()); //output: 3
    console.log(queue.dequeue()); //output: 4
    console.log(queue.dequeue()); //output: 5
    console.log(queue.isEmpty()); //output: true
}

module.exports = { linkedListExample, binaryTreeExample, graphExample, cycleExample, minMaxStackExample, queueExample };