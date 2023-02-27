export function sum(first, second) {
    if (typeof(first) != "number" && typeof(first) != "bigint"
    || typeof(second) != "number" && typeof(second) != "bigint")
        throw new Exception("invalid input");
    return BigInt(first) + BigInt(second);
}

export function substract(first, second) {
    if (typeof(first) != "number" && typeof(first) != "bigint"
    || typeof(second) != "number" && typeof(second) != "bigint")
        throw new Exception("invalid input");
    return BigInt(first) - BigInt(second);
}

export function multiply(first, second) {
    if (typeof(first) != "number" && typeof(first) != "bigint"
    || typeof(second) != "number" && typeof(second) != "bigint")
        throw new Exception("invalid input");
    return BigInt(first) * BigInt(second);
}

export function divide(first, second) {
    if (typeof(first) != "number" && typeof(first) != "bigint"
    || typeof(second) != "number" && typeof(second) != "bigint")
        throw new Exception("invalid input");
    if (second == 0)
        return first == 0 ? NaN : Infinity;
    return BigInt(first) / BigInt(second);
}

