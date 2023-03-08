const Emitter = require('events');
const emmiter = new Emitter();

emmiter.on('message', (data, second) => {
    console.log(`Вы прислали сообщение ${data}`);
    console.log(`Second ${second}`);
});

const MESSAGE = process.env.message || '';
if (MESSAGE) {
    emmiter.emit('message', MESSAGE, 'qwerty');
} else {
    emmiter.emit('message', 'empty msg');
}