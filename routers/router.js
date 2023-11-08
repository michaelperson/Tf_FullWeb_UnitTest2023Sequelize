const authRouter = require('./auth.router');
const characterRouter = require('./character.router');
const movieRouter = require('./movie.router');



const router = require('express').Router();

router.use('/character', characterRouter);
router.use('/movie', movieRouter);
router.use('/auth', authRouter);

module.exports = router;