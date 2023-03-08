const fs = require('fs');
const path = require('path');

//fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir2', 'dir3'), {recursive: true});

console.log('start');
fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('complete');

});
console.log('end');

fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
    if (err)
        throw err;
});

// нечитабельно
// fs.writeFile(path.resolve(__dirname, 'file.txt'), 'asdqwe 12345\n', (err) => {
//     if (err)
//         throw err;
//     console.log('complete write');
//     fs.appendFile(path.resolve(__dirname, 'file.txt'), 'konets faila', (err) => {
//         if (err)
//             throw err;
//         console.log('complete write');
//     });
// });

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err)
            return reject(err.message);
        resolve();
        console.log('complete write');
    }))
};

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if (err)
            return reject(err.message);
        resolve();
        console.log('complete append');
    }))
};

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
        if (err)
            return reject(err.message);
        resolve(data);
        console.log('complete read');
    }))
};

const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if (err)
            return reject(err.message);
        resolve();
        console.log('complete remove');
    }))
};


let filePath = path.resolve(__dirname, 'file.txt');
writeFileAsync(filePath, 'kakie-to dannie dlya faila\n')
    .then(() => appendFileAsync(filePath, 'ischo dannie dlya faila\n'))
    .then(() => appendFileAsync(filePath, 'bol`she dannih\n'))
    .then(() => readFileAsync(filePath))
    .then(data => console.log(data))
    .catch(err => console.log(err));


const text = process.env.text || '';
const fname = path.resolve(__dirname, 'text.txt')
const fnameRes = path.resolve(__dirname, 'count.txt')

writeFileAsync(fname, text)
    .then(() => readFileAsync(fname))
    .then(data => data.split(' ').length)
    .then(count => writeFileAsync(fnameRes, `Количество слов: ${count}`))
    .then(() => removeFileAsync(fname))
    .catch(err => console.log(err.message));
