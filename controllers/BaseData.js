'use strict';

var utils = require('../utils/writer.js');
var BaseData = require('../service/BaseDataService');

module.exports.getIssuersPOST = function getIssuersPOST (req, res, next) {
  var xAuthToken = req.swagger.params['X-Auth-Token'].value;
  var body = req.swagger.params['body'].value;
  BaseData.getIssuersPOST(xAuthToken,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMyAssetsPOST = function getMyAssetsPOST (req, res, next) {
  var xAuthToken = req.swagger.params['X-Auth-Token'].value;
  var body = req.swagger.params['body'].value;
  BaseData.getMyAssetsPOST(xAuthToken,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getPeersGET = function getPeersGET (req, res, next) {
  BaseData.getPeersGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRegistryPOST = function getRegistryPOST (req, res, next) {
  var xAuthToken = req.swagger.params['X-Auth-Token'].value;
  var body = req.swagger.params['body'].value;
  BaseData.getRegistryPOST(xAuthToken,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getShareholderPOST = function getShareholderPOST (req, res, next) {
  var xAuthToken = req.swagger.params['X-Auth-Token'].value;
  var body = req.swagger.params['body'].value;
  BaseData.getShareholderPOST(xAuthToken,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
