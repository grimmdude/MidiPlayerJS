class Utils {
	static byteToHex(byte) {
		// Ensure hex string always has two chars
		return ('0' + byte.toString(16)).slice(-2);
	}

	static bytesToHex(byteArray) {
		var hex = [];

		byteArray.forEach(function(byte) {
			hex.push(Utils.byteToHex(byte));
		});

		return hex.join('');
	}

	static hexToNumber(hexString) {
		return parseInt(hexString, 16);
	}

	static bytesToNumber(byteArray) {
		return Utils.hexToNumber(Utils.bytesToHex(byteArray));
	}

	static bytesToLetters(byteArray) {
		var letters = [];
		byteArray.forEach(function(byte) {
			letters.push(String.fromCharCode(byte));
		});

		return letters.join('');
	}

	static decToBinary(dec) {
    	return (dec >>> 0).toString(2);
	}

	static readVarInt(byteArray) {
		var result = 0;
		byteArray.forEach(function(number) {
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

	static atob(string) {
		if (typeof atob === 'function') return atob(string);
		return new Buffer(string, 'base64').toString('binary');
	}
}

exports.Utils = Utils;