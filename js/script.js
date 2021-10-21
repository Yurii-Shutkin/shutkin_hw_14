function padString  (str, strLength, symb, isRight = true) {
    if (typeof str !== 'string') return 'String is invalid';
    if (typeof strLength !== 'number' || isNaN(strLength)) return 'Number is invalid';
    if (str.length > strLength) return str.substr(0, strLength);

    if (typeof symb !== 'string' || symb.length !== 1) return 'Symbol is invalid';
    if (typeof isRight !== 'boolean') return 'Flag is invalid'

    let localStr = '';

    for (i = str.length; i < strLength; i++) {
        localStr += symb;
    }

    return isRight ? str += localStr : localStr + str;
}

console.log (padString('hello', 8, '*'));
console.log (padString('hello', 7, '*', false));
console.log (padString('hello', 2));
console.log (padString('d', 8, '*', false));
console.log (padString(2, 8));
console.log (padString('d', '2'));
console.log (padString('d', 2, '&&'));
console.log (padString('d', 6, '$', 'true'));