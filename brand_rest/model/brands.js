var mongoClient = require('mongodb').MongoClient;
var constants = require('../utils/service_constants');
var url = constants.DB_URL;

module.exports = {
getAllBrands: function (req, callback) {
    mongoClient.connect(url, function (err, db) {
        db.collection("brands").find({}).toArray(function (err, result) {
            if (err) throw err;
            else {
                callback(result);
            }
            db.close();
        });
    });
  }
}