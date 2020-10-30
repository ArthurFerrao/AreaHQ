var express = require('express');
var router = express.Router();

const controller = require('../controllers/titles');

router.get('/', controller.getAll);

router.get('/:id', controller.getById);

router.post('/', controller.add);

router.put('/:id', controller.update);


module.exports = router;
