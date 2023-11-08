const movieController = require('../controllers/movie.controller');

const movieRouter = require('express').Router();

movieRouter.route('/')
    .get(movieController.getAll)
    .post(movieController.add)
    // Pour tout autre verbe http, la méthode all va renvoyer une erreur et donc interdire l'accès
    .all(((res, req) => {
        res.sendStatus(405);
    }));

movieRouter.route('/:id')
    .get(movieController.getById)
    .put(movieController.update)
    .delete(movieController.delete)
    // Pour tout autre verbe http, la méthode all va renvoyer une erreur et donc interdire l'accès
    .all(((res, req) => {
        res.sendStatus(405);
    }));

movieRouter.route('/actor')
    .get(movieController.getActors)
    // Pour tout autre verbe http, la méthode all va renvoyer une erreur et donc interdire l'accès
    .all(((res, req) => {
        res.sendStatus(405);
    }));

movieRouter.route('/actor/add')
    .patch(movieController.addActor)
    // Pour tout autre verbe http, la méthode all va renvoyer une erreur et donc interdire l'accès
    .all(((res, req) => {
        res.sendStatus(405);
    }));

movieRouter.route('/actor/remove')
    .patch(movieController.removeActor)
    // Pour tout autre verbe http, la méthode all va renvoyer une erreur et donc interdire l'accès
    .all(((res, req) => {
        res.sendStatus(405);
    }));

module.exports = movieRouter;