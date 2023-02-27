describe("Plus", function() {
    it("Simple case", function() {
        assert.equal(sum(11111111111111111111n, 22222222222222222222n), 33333333333333333333n);
        assert.equal(sum(100, 23), 123n);
        assert.equal(sum(0, 0), 0n);
        assert.equal(sum(-11111111111111111111n, -22222222222222222222n), -33333333333333333333n);
    });  
})

describe("Minus", function() {
    it("Simple case", function() {
        assert.equal(substract(33333333333333333333n, 11111111111111111111n), 22222222222222222222n);
        assert.equal(substract(100, 23), 77n);
        assert.equal(substract(0, 0), 0n);
        assert.equal(substract(-11111111111111111111n, -22222222222222222222n), 11111111111111111111n);
    });  
})

describe("Multiply", function() {
    it("Simple case", function() {
        assert.equal(multiply(11111n, 2n), 22222n);
        assert.equal(multiply(100, 23), 2300n);
        assert.equal(multiply(0, 0), 0n);
        assert.equal(multiply(10000000000000000000000000000000n, 10), 100000000000000000000000000000000n);
    });  
})

describe("Divide", function() {
    it("Simple case", function() {
        assert.equal(divide(100, 2), 50n);
        assert.equal(divide(100n, 25n), 4n);
        assert.equal(divide(2, 0), Infinity);
        assert.equal(divide(0, 0).toString(), NaN.toString()); // NaN = NaN
        assert.equal(divide(10000000000000000000000000000000n, 10), 1000000000000000000000000000000n);
    });  
})
