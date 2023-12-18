const router = require('express').Router();

// Import our modular routers for /tips and /feedback
const htmlRouter = require('./HTMLRoute');
const notesRouter = require('./ApiRoute');

router.use('/', htmlRouter);
router.use('/api', notesRouter);

module.exports = router;
