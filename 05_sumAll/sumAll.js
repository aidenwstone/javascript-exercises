const sumAll = function(num1, num2) {
    let sum = num1;

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    else if (!Number.isInteger(num1) || !Number.isInteger(num2)) { 
        return "ERROR";
    }

    let currNum = num1;
    do {
        num1 > num2 ? currNum-- : currNum++;
        sum += currNum;
    }
    while (currNum != num2);

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
