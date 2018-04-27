var express = require('express');
var router = express.Router();
var brands = require('../model/brands');

router.get('/', function(req, res) {
    brands.getAllBrands(req, (result) => {
        res.status(200)
        .json({
            status: 'success',
            data: result,
            message: 'Retrieved all brands'
        });
    });
});

router.get('/:brand', function(req, res) {
    brands.getBrand(req, (result) => {
        res.status(200)
        .json({
            status: 'success',
            data: result,
            message: 'Retrieved all brands'
        });
    });
});

module.exports.router = router;