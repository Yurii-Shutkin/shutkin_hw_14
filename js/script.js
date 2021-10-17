function padString (str, strPower, symb, isRightSymb = true) {
    
    if (str === '') {
        return 'Строка пустая'
    } else if (isNaN (strPower) || strPower === 0) {
        return 'Длина строки не указана'
    }
    
    if (symb) {
        for (symb.length = 0; (str + symb).length < strPower; symb.length++) {
            symb += symb.substr(0, strPower);
        }
    } else {
        if (str.length < strPower) {
            return (str.substr(0, str.length));
        }
    }
    
    if ((str + symb).length > strPower) {
        if (isRightSymb === false) {
            return (symb + str).substr(0, strPower);
        } else {
            return (str + symb).substr(0, strPower);
        }
    } else if (isRightSymb === false) {
        return (symb + str);
    } else {
        return (str + symb);
    }
}

console.log (padString('hello', 8, '*'));
console.log (padString('hello', 6, '*', false));
console.log (padString('hello', 2));
console.log (padString('hello', 53));
console.log (padString('hello', 0, '*'));
console.log (padString('', 8, '*', false));