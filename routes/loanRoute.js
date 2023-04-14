const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');

// Route for rendering loanLists view
router.get('/', loanController.getLoanList);

module.exports = router;
