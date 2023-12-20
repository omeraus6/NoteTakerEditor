const router = require('express').Router();

// Import our modular routers for /tips and /feedback
const htmlRouter = require('./HTMLRoute');
const notesRouter = require('./ApiRoute');

router.use('/api', notesRouter);
router.use('/', htmlRouter);

module.exports = router;
