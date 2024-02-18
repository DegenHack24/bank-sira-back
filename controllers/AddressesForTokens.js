'use strict';

var utils = require('../utils/writer.js');
var AddressesForTokens = require('../service/AddressesForTokensService');

module.exports.getMyTokensPOST = function getMyTokensPOST(req, res, next) {
    var xAuthToken = req.swagger.params['X-Auth-Token'].value;
    AddressesForTokens.getMyTokensPOST(xAuthToken)
        .then(function (response) {
            utils.writeJson(res, response?.body, response?.code);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getSpecificIssuerTokensPOST = function getSpecificIssuerTokensPOST(req, res, next) {
    var xAuthToken = req.swagger.params['X-Auth-Token'].value;
    var body = req.swagger.params['body'].value;
    AddressesForTokens.getSpecificIssuerTokensPOST(xAuthToken, body)
        .then(function (response) {
            utils.writeJson(res, response);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};

module.exports.getTokensPOST = function getTokensPOST(req, res, next) {
    var xAuthToken = req.swagger.params['X-Auth-Token'].value;
    AddressesForTokens.getTokensPOST(xAuthToken)
        .then(function (response) {
            utils.writeJson(res, response?.body, response?.code);
        })
        .catch(function (response) {
            utils.writeJson(res, response);
        });
};
