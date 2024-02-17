'use strict';

var utils = require('../utils/writer.js');
var Offers = require('../service/OffersService');

module.exports.getAllOffersPOST = function getAllOffersPOST (req, res, next) {
  var xAuthToken = req.swagger.params['X-Auth-Token'].value;
  var body = req.swagger.params['body'].value;
  Offers.getAllOffersPOST(xAuthToken,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOfferPOST = function getOfferPOST (req, res, next) {
  var xAuthToken = req.swagger.params['X-Auth-Token'].value;
  var body = req.swagger.params['body'].value;
  Offers.getOfferPOST(xAuthToken,body)
    .then(function (response) {
      utils.writeJson(res, response?.body, response?.code);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getOffersPOST = function getOffersPOST (req, res, next) {
  var xAuthToken = req.swagger.params['X-Auth-Token'].value;
  var body = req.swagger.params['body'].value;
  Offers.getOffersPOST(xAuthToken,body)
    .then(function (response) {
      utils.writeJson(res, response?.body, response?.code);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
