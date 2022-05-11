var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index.jade', { title: 'PAGINA WEB' });
});

module.exports = router;
