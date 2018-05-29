
let unicodeConvertor = {
	format: (str) => {
		str = String(str);

		let result = '';
		for (let i = 0; i < str.length; i ++) {
			result += '\\u' + str[i].charCodeAt().toString(16);
		}
		return result;
	},
	parse: (unicode) => {
		return unicode.split('\\u').filter((n) => n != '').map(n => String.fromCodePoint(Number('0x' + n))).join('');
	}
}

export default unicodeConvertor;