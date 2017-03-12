class Track	{
	constructor(data) {
		this.enabled = true;
		this.pointer = 0;
		this.lastTick = 0;
		this.data = data;
	}

	enable() {
		this.enabled = true;
		return this;
	}

	disable() {
		this.enabled = false;
		return this;
	}
}