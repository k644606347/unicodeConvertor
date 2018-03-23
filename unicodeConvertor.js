
let unicodeConvertor = {
	format: (str) => {
		return str.split('').map((n) => '\\u' + n.charCodeAt().toString(16)).join('');
	},
	parse: (unicode) => {
		return unicode.split('\\u').filter((n) => n != '').map(n => String.fromCodePoint(Number('0x' + n))).join('');
	}
}

export default unicodeConvertor;