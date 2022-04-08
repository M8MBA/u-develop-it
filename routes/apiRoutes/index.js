const express = require('express');
const router = express.Router();

router.use(require('./candidateRoutes'));
// voters
router.use(require('./voterRoutes'));
// votes
router.use(require('./voteRoutes'));

module.exports = router;