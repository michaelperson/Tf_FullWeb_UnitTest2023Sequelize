const characterController = require('../controllers/character.controller');

const characterRouter = require('express').Router();

characterRouter.route('/')
    .get(characterController.getAll)
    .post(characterController.add)
    // Pour tout autre verbe http, la méthode all va renvoyer une erreur et donc interdire l'accès
    .all(((res, req) => {
        res.sendStatus(405);
    }));

characterRouter.route('/:id')
    .get(characterController.getById)
    .put(characterController.update)
    .delete(characterController.delete)
    // Pour tout autre verbe http, la méthode all va renvoyer une erreur et donc interdire l'accès
    .all(((res, req) => {
        res.sendStatus(405);
    }));

module.exports = characterRouter;