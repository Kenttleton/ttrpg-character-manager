var express = require('express');
var router = express.Router();

// GET - get profile information
router.get('/:userId', function(req, res, next) {
  res.status(200).json();
});

module.exports = router;
