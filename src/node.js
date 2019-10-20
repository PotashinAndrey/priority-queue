class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.younger = null;
		this.upward = null;
	}

	appendChild(node) {
		if (!this.younger || !this.upward) {
			if (!this.younger) {
				this.younger = node;
				node.parent = this;
			} else {
				this.upward = node;
				node.parent = this;
			}
		}
	}

	removeChild(node) {
		if (node === this.younger) {
			this.younger = null;
			node.parent = null;
		} else if (node === this.upward) {
			this.upward = null;
			node.parent = null;
		} else throw Error;
	}

	remove() {
		if (this.parent) this.parent.removeChild(this);
	}

	swapWithParent() {
		if (this.parent) {
			if (this.younger) this.younger.parent = this.parent;
			if (this.upward) this.upward.parent = this.parent;

			if (this === this.parent.younger) {
				if (this.parent.upward) this.parent.upward.parent = this;
				[this.parent.younger, this.parent.upward, this.younger, this.upward] = [this.younger, this.upward, this.parent, this.parent.upward];
			}

			if (this === this.parent.upward) {
				if (this.parent.younger) this.parent.younger.parent = this;
				[this.parent.younger, this.parent.upward, this.younger, this.upward] = [this.younger, this.upward, this.parent.younger, this.parent];
			}

			if (this.parent.parent) {
				if (this.parent === this.parent.parent.younger) {
					this.parent.parent.younger = this;
				}
				if (this.parent === this.parent.parent.upward) {
					this.parent.parent.upward = this;
				}
			}
			[this.parent.parent, this.parent] = [this, this.parent.parent];
		}
	}
}

module.exports = Node;
