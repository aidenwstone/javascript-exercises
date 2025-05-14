const palindromes = function (str) {
    let result = true;

    for (let i = 0; i <= str.length / 2; i++) {
        if (str[i] != str[str.length - (1 + i)]) {
            result = false;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = palindromes;
