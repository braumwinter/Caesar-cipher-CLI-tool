function _shiftCharCode(charCode, shift) {
    function _checkIncludedRange(num, range) {
        return (num >= range.start) && (num <= range.end)
    }

    const [upperCaseIndexRange, lowerCaseIndexRange] = [{}, {}];
    [upperCaseIndexRange.start, upperCaseIndexRange.end] = [65, 90];
    [lowerCaseIndexRange.start, lowerCaseIndexRange.end] = [97, 122];
    let newCode = charCode;

    if (_checkIncludedRange(charCode, upperCaseIndexRange)) {
        newCode = charCode + shift;
        if (!_checkIncludedRange(newCode, upperCaseIndexRange)) {
            if (shift > 0) {
                newCode = upperCaseIndexRange.end - newCode + upperCaseIndexRange.start;
            } else {
                newCode = upperCaseIndexRange.end - (upperCaseIndexRange.start - newCode);
            }
        }
    } else if (_checkIncludedRange(charCode, lowerCaseIndexRange)) {
        newCode = charCode + shift;
        if (!_checkIncludedRange(newCode, lowerCaseIndexRange)) {
            if (shift > 0) {
                newCode = upperCaseIndexRange.end - newCode + upperCaseIndexRange.start;
            } else {
                newCode = upperCaseIndexRange.end - (upperCaseIndexRange.start - newCode);
            }
        }
    }

    return newCode;
}

module.exports.transform = function (consoleData, string) {
    const alphaBetLen = 26;
    consoleData.action
    let shift = Number(consoleData.shift) % alphaBetLen;
    if (consoleData.action === 'encode') {
        shift = shift;
    } else if (consoleData.action === 'decode') {
        shift = -shift;
    } else {
        throw new Error(`Action ${consoleData.action} is not supported`);
    }
    let transformedString = '';
    for (let symbol of string) {
        const newCode = _shiftCharCode(symbol.charCodeAt(0), shift);
        transformedSymbol = String.fromCharCode(newCode);
        transformedString += transformedSymbol;
    }
    return transformedString;
}