const sumAll = function(startInt, endInt) {
    let sum = 0;

    for (let num = startInt; num <= endInt; num++) {
        sum += num;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
