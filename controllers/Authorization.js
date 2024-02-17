'use strict';

var utils = require('../utils/writer.js');
var Authorization = require('../service/AuthorizationService');

module.exports.challengePOST = function challengePOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Authorization.challengePOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginPOST = function loginPOST (req, res, next) {
  var xAuthToken = req.swagger.params['X-Auth-Token'].value;
  var body = req.swagger.params['body'].value;
  Authorization.loginPOST(xAuthToken,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
