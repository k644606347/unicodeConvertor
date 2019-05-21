function encodeUnicode(str) {
    return (str + '')
        .split('')
        .map(char => '\\u{' + char.codePointAt(0).toString(16).padStart(4, '0') + '}')
        .join('');
}
function decodeUnicode(unicodeStr) {
    return (unicodeStr + '')
        .split(/(\\u(?:\{\w{4,}\}|\w{4}))/)
        .filter(str => str)
        .map(str => {
            if (/^\\u/.test(str)) {
                let codePoint = parseInt(str.replace(/^\\u{?/, '').replace(/}$/, ''), 16);

                if (Number.isNaN(codePoint)) {
                    return str;
                } else {
                    return String.fromCodePoint(codePoint);
                }
            } else {
                return str;
            }
        })
        .join('');
};
