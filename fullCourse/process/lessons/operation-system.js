const os = require('os');
const cluster = require('cluster');

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length);

const cpus = os.cpus();
if (cluster.isMaster) {
    for (let i = 0; i < os.cpus().length-2; i++) {
        cluster.fork();
    }
    cluster.on('exit', (worker) => {
        console.log(`Процесс ${worker.process.pid} умер`);
        cluster.fork();
    });
} else {
    console.log(`Запущен процесс: ${process.pid}`);
    setInterval(() => {
        console.log(`${process.pid} still working`);
    }, 5000);
}