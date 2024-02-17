'use strict';

var utils = require('../utils/writer.js');
var Other = require('../service/OtherService');

module.exports.getAssetInfoPOST = function getAssetInfoPOST (req, res, next) {
  var xAuthToken = req.swagger.params['X-Auth-Token'].value;
  var body = req.swagger.params['body'].value;
  Other.getAssetInfoPOST(xAuthToken,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
