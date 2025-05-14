const fibonacci = function(num) {
    let fibonacci = [1, 1];

    if (num == 0) { return 0; };
    if (num < 0) { return 'OOPS' };
    
    for (let i = 1; i < num; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i]);
    }

    return fibonacci[num - 1]; 
};

// Do not edit below this line
module.exports = fibonacci;
