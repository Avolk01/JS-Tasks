const PORT = process.env.PORT || 5000;
const Application = require('./framework/Application');
const genreRouter = require('./src/genre/genre-router');
const filmRouter = require('./src/film/film-router');
const jsonParser = require('./framework/parseJson');
const parseUrl = require('./framework/parseUrl');

const app = new Application()
app.use(jsonParser);
app.use(parseUrl('http://localhost:5000'));
app.addRouter(genreRouter);
app.addRouter(filmRouter);
app.listen(PORT, () => console.log(`Server started on ${PORT}`))   