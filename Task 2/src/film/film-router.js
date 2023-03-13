const Router = require('../../framework/Router.js');
const controller = require('./film-controller');
const router = new Router()

router.get('/films', controller.getFilm);
router.post('/films', controller.createFilm);
router.put('/films', controller.updateFilm);
router.delete('/films', controller.deleteFilm);

module.exports = router
