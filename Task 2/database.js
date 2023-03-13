const {Client} = require('pg');
const client = new Client({
    user: "films_user",
    password: "films",
    host: "localhost",
    port: 5432,
    database: "films"
});
client.connect();
module.exports = client;