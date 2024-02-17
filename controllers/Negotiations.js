'use strict';

var utils = require('../utils/writer.js');
var Negotiations = require('../service/NegotiationsService');

module.exports.counterOfferNegotiationPOST = function counterOfferNegotiationPOST (req, res, next) {
  var xAuthToken = req.swagger.params['X-Auth-Token'].value;
  var body = req.swagger.params['body'].value;
  Negotiations.counterOfferNegotiationPOST(xAuthToken,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.lockOfferNegotiationPOST = function lockOfferNegotiationPOST (req, res, next) {
  var xAuthToken = req.swagger.params['X-Auth-Token'].value;
  var body = req.swagger.params['body'].value;
  Negotiations.lockOfferNegotiationPOST(xAuthToken,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.offerNegotiationPOST = function offerNegotiationPOST (req, res, next) {
  var xAuthToken = req.swagger.params['X-Auth-Token'].value;
  var body = req.swagger.params['body'].value;
  Negotiations.offerNegotiationPOST(xAuthToken,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
