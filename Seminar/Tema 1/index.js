
const FIRST_NAME = "Andrei";
const LAST_NAME = "Baicu";
const GRUPA = "1075";

/**
 * Make the implementation here
 */
function numberParser(value) {
    if(value == Number.POSITIVE_INFINITY || value == Number.NEGATIVE_INFINITY) return NaN;
    if(isNaN(value) == true) return NaN;
    if(value > Number.MAX_SAFE_INTEGER|| value <  Number.MIN_SAFE_INTEGER) return NaN;
    return parseInt(value);

}

module.exports = {
    FIRST_NAME,
    LAST_NAME,
    GRUPA,
    numberParser
}

