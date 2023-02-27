"use strict";

function toLowerCaseExceptFirst(str) {
    if(typeof(str) != "string")
        throw new Exception("invalid input");
    if(str.length == 0)
        return "";
    str = str.trim();
    if(str.length == 1)
        return str[0].toUpperCase();
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// хотел сделать с массивом разделителей, но что-то пошло не так,
// по идее этот код тоже легко модифицировать при увеличении числа разделителей 
function formatString(str) { 
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

function calcWordCount(str) { // пробелы и знаки препинания не считаются словами
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

function calcUniqueWordCount(str) {
    let res = new Map();
    str = formatString(str);
    str = str.replace(/,/g,"");
    str = str.replace(/\./g,"");
    str = str.replace(/!/g,"");
    str = str.replace(/\?/g,""); // оставляем только буквы в тексте
    var arr = str.split(" ");
    for (let word of arr)
        if(res.has(word))
            res.set(word, res.get(word) + 1);
        else
            res.set(word, 1); 
    return res;
}




