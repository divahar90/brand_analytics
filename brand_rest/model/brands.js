var mongoClient = require('mongodb').MongoClient;
var constants = require('../utils/service_constants');
var url = constants.DB_URL;
var brandUtil = require('../utils/parse_json');

module.exports = {
    getAllBrands: function (req, callback) {
        brandUtil.getAllBrandsJson(req, (results) => {
            var result = [];
            results.forEach(function(value, key) {
                result.push({brand: key, likes: value.likes,
                            shares: value.shares, comments: value.comments});
            });
            callback(result);
        });
    },
    getBrand: function (req, callback) {
        brandUtil.getBrandJson(req, (results) => {
            var result = {brand: '', data: ''};
            result.brand = req.params.brand;
            result.data = results;
            callback(result);
        });
    }
}