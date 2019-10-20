const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
if (this.isEmpty()) {
			this.root = node;
			this.parentNodes.push(node);
		} else {
			this.parentNodes.push(node);
			this.parentNodes[0].appendChild(node);
		}
		if (this.parentNodes[0].left && this.parentNodes[0].right) this.parentNodes.shift();
	}

	isEmpty() {
		return this.root === null && this.parentNodes.length === 0;
	}

	push(data, priority) {
		const node = new Node(data, priority);

		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		if (!this.isEmpty()) {
			const detached = this.detachRoot();
			this.restoreRootFromLastInsertedNode(detached);
			this.shiftNodeDown(this.root);
			return detached.data;
		}
	}

	detachRoot() {
		const {root} = this;
		if (this.parentNodes.includes(root)) this.parentNodes.shift();
		this.root = null;
		return root;
	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {

	}

	clear() {

	}

	shiftNodeUp(node) {

	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
