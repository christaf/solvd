//Usage Demonstration: Create instances of your data structures and demonstrate their usage with sample data. Show how the algorithms you implemented can solve practical problems using these data structures.

const { Graph, Queue, BinaryTree, TreeNode, LinkedList, Stack } = require('./part1.js');
const { MinMaxStack, hasCycle, dijkstraNonWeighted, isBST } = require('./part2.js');

const linkedListExample = () => {
    //create a new linked list
    let linkedList = new LinkedList();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(4);
    linkedList.insert(5);

    //search for a node with value 3
    console.log(linkedList.search(3)); //output: Node { value: 3, next: Node { value: 4, next: Node { value: 5, next: null } } }

    //delete a node with value 3
    linkedList.delete(3);
    console.log(linkedList.search(3)); //output: null
}

const binaryTreeExample = () => {


    // Create a new binary tree
    let binaryTree = new BinaryTree();
    binaryTree.insert(1);

    // Manually create a situation where the tree is not a BST
    binaryTree.root.left = new TreeNode(2);
    binaryTree.root.left.right = new TreeNode(1);
    binaryTree.root.right = new TreeNode(0);


    let binaryTree2 = new BinaryTree();
    binaryTree2.insert(1);
    binaryTree2.insert(3);

    console.log(binaryTree2);

    //check if the binary tree is a binary search tree
    console.log(isBST(binaryTree.root)); //output: false
    console.log(isBST(binaryTree2.root)); //output: true
}

const graphExample = () => {

    //create a new graph
    const graph = new Graph();
    graph.addVertex('A');
    graph.addVertex('B');
    graph.addVertex('C');
    graph.addVertex('D');
    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'D');
    graph.addEdge('C', 'D');

    console.log(graph.depthFirstSearch('A')); // [ 'A', 'B', 'D', 'C' ]
    console.log(graph.breadthFirstSearch('A')); // [ 'A', 'B', 'C', 'D' ]

    const distances = dijkstraNonWeighted(graph, 'A');
    console.log(distances); // { A: 0, B: 1, C: 1, D: 2 }
}

const cycleExample = () => {
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

// linkedListExample();
// binaryTreeExample();
// graphExample();
// cycleExample();
// minMaxStackExample();
// queueExample();


module.exports = { linkedListExample, binaryTreeExample, graphExample, cycleExample, minMaxStackExample, queueExample };