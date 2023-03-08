const fs = require('fs');
const path = require('path');

fs.readFileSync(path.resolve(__dirname, 'test.txt'), (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});

// можно добавлять опции
const readStream = fs.createReadStream(path.resolve(__dirname, 'test.txt'));

readStream.on('data', (chunk) => {
    console.log(chunk);
});

readStream.on('open', () => console.log('start reading'));
readStream.on('end', () => console.log('end reading'));
readStream.on('error', (err) => console.log(err));

const writeStream = fs.createWriteStream(path.resolve(__dirname, 'write.txt'));
for (let i = 0; i < 20; i++) {
    writeStream.write(i + '\n');
}
writeStream.end();
writeStream.close();
writeStream.destroy();
writeStream.on('error');