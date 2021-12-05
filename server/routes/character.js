var express = require('express');
var router = express.Router();

// CREATE - create a new character for the User
router.post('/:userId', function(req, res, next) {
  res.status(200).json();
});

// READ - get collection of characters for a User
router.get('/:userId', function(req, res, next) {
  res.status(200).json();
});

// UPDATE - update a character
router.put('/:id', function(req, res, next) {
  res.status(204).json();
});

// DELETE - remove a character
router.delete('/:id', function(req, res, next) {
  res.status(204).json();
});

module.exports = router;
