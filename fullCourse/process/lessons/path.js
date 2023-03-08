const path = require("path");

console.log(path.join(__dirname ,"asd", "qwe", "asdqwe"));
console.log(path.resolve("first", "second", "third"));

const fullPath = path.resolve("first", "second", "third.kaef");
console.log(path.parse(fullPath));
// другие функции:  path.sep - сепаратор
//                  path.isAbsolute(path) - проверка на абсолютный путь
//                  path.basename(path) - имя файла
//                  path.extname(path) - расширение файла

const siteURL = 'http://localhost:8080/users?id=5123';

const url = new URL(siteURL);
console.log(url);