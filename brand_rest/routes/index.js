var express = require('express');
var router = express.Router();

router.use('/api/brands', require('../service/brands_service').router);

// application -------------------------------------------------------------
router.get('/', function (req, res) {
    res.render('index', {title: 'API'});
});

module.exports = router;

