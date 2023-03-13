const Router = require('../../framework/Router.js');
const controller = require('./genre-controller');
const router = new Router()

router.get('/genres', controller.getGenre);
router.post('/genres', controller.createGenre);
router.put('/genres', controller.updateGenre);
router.delete('/genres', controller.deleteGenre);

module.exports = router
