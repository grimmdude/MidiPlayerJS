/**
 * Contains misc static utility methods.
 */
class Utils {

	/**
	 * Converts a single byte to a hex string.
	 * @param {number} byte
	 * @return {string}
	 */
	static byteToHex(byte) {
		// Ensure hex string always has two chars
		return ('0' + byte.toString(16)).slice(-2);
	}

	/**
	 * Converts an array of bytes to a hex string.
	 * @param {array} byteArray
	 * @return {string}
	 */
	static bytesToHex(byteArray) {
		var hex = [];
		byteArray.forEach(byte => hex.push(Utils.byteToHex(byte)));
		return hex.join('');
	}

	/**
	 * Converts a hex string to a number.
	 * @param {string} hexString
	 * @return {number}
	 */
	static hexToNumber(hexString) {
		return parseInt(hexString, 16);
	}

	/**
	 * Converts an array of bytes to a number.
	 * @param {array} byteArray
	 * @return {number}
	 */
	static bytesToNumber(byteArray) {
		return Utils.hexToNumber(Utils.bytesToHex(byteArray));
	}

	/**
	 * Converts an array of bytes to letters.
	 * @param {array} byteArray
	 * @return {string}
	 */
	static bytesToLetters(byteArray) {
		var letters = [];
		byteArray.forEach(byte => letters.push(String.fromCharCode(byte)));
		return letters.join('');
	}

	/**
	 * Converts a decimal to it's binary representation.
	 * @param {number} dec
	 * @return {string}
	 */
	static decToBinary(dec) {
    	return (dec >>> 0).toString(2);
	}

	/**
	 * Reads a variable length value.
	 * @param {array} byteArray
	 * @return {number}
	 */
	static readVarInt(byteArray) {
		var result = 0;
		byteArray.forEach(number => {
			var b = number;
			if (b & 0x80) {
				result += (b & 0x7f);
				result <<= 7;
			} else {
				/* b is the last byte */
				result += b;
			}
		});

		return result;
	}

	/**
	 * Decodes base-64 encoded string
	 * @param {string} string
	 * @return {string}
	 */
	static atob(string) {
		if (typeof atob === 'function') return atob(string);
		return new Buffer(string, 'base64').toString('binary');
	}
}

export {Utils};