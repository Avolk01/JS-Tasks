export function toLowerCaseExceptFirst(str) {
    if(typeof(str) != "string")
        throw new Exception("invalid input");
    if(str.length == 0)
        return "";
    str = str.trim();
    if(str.length == 1)
        return str[0].toUpperCase();
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export function formatString(str) { 
    if(typeof(str) != "string")
        throw new Exception("invalid input");
    if (str.length == 0)
        return "";
    str = str.replace(/\s*,\s*/g, ", ");
    str = str.replace(/\s*\.\s*/g, ". ");
    str = str.replace(/\s*!\s*/g, "! ");
    str = str.replace(/\s*\?\s*/g, "? ");  
    str = str.replace(/\s*-\s*/g, " - ");
    str = str.replace(/\s+/g, " ");     
    if (str[0] == " ")
        str = str.slice(1);
    if (str.length != 0)
        if (str[str.length - 1] == " ")
            str = str.slice(0, str.length-1);
    return str;
}

export function calcWordCount(str) {
    if (typeof(str) != "string")
        throw new Exception("invalid input");
    if (str.length == 0)
        return 0;
    str = formatString(str);
    let arr = str.split(" ");
    let k = 0;
    for (let word of arr)
        if (/\w+/g.test(word))
            k++;
    return k;
}

export function calcUniqueWordCount(str) {
    let res = new Map();
    str = formatString(str);
    str = str.replace(/,/g,"");
    str = str.replace(/\./g,"");
    str = str.replace(/!/g,"");
    str = str.replace(/\?/g,""); 
    var arr = str.split(" ");
    for (let word of arr)
        if(res.has(word))
            res.set(word, res.get(word) + 1);
        else
            res.set(word, 1); 
    return res;
}




