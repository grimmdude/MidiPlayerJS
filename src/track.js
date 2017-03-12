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

	getCurrentByte() {
		return this.data[pointer];
	}

	getDeltaByteCount() {
		// Get byte count of delta VLV
		// http://www.ccarh.org/courses/253/handout/vlv/
		// If byte is greater or equal to 80h (128 decimal) then the next byte 
	    // is also part of the VLV,
	   	// else byte is the last byte in a VLV.
	   	var currentByte = this.getCurrentByte();
	   	var byteCount = 1;

		while (currentByte >= 128) {
			currentByte = this.data[pointer + byteCount];
			byteCount++;
		}

		return byteCount;
	}
}