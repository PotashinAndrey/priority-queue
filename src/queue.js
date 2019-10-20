const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.maxSize = maxSize;
		this.length = 0;
		this.list = [30];

	}

	push(data, priority) {
		if (this.length == this.maxSize) return;
		this.list[this.length++] = [priority, data];
		for (let i = this.length; i > 0 && this.comparison(this.list[i], this.list[i >> 1]); i = i >> 1) {
			this.swapElements(i, i >> 1);
		}
	}

	comparison(a, b) {
		return a[0] < b[0];
	}

	swapElements(firhst, second) {
		let temp = this.list[firhst];
		this.list[firhst] = this.list[second];
		this.list[second] = temp;
	}

	shift() {
		if (this.length == 0) return;

		this.swapElements(0, this.length);
		this.rechargeStructure(1);
		return this.list[this.length--];
	}

	size() {
		return this.length;
	}

	isEmpty() {
		return !this.length;
	}
}

module.exports = PriorityQueue;
