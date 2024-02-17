'use strict';


/**
 * Issuers list
 *
 * xAuthToken String In requests head should be attached token from login service
 * body IssuersRequest 
 * returns IssuerEnvelope
 **/
exports.getIssuersPOST = function(xAuthToken,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json;charset&#x3D;utf-8'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Papers list for specific client
 *
 * xAuthToken String In requests head should be attached token from login service
 * body MyAssetsRequest 
 * returns MyAssetsEnvelope
 **/
exports.getMyAssetsPOST = function(xAuthToken,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json;charset&#x3D;utf-8'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Other API SIRA addresses list
 *
 * returns PeersEnvelope
 **/
exports.getPeersGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json;charset&#x3D;utf-8'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * All data for specific registry
 *
 * xAuthToken String In requests head should be attached token from login service
 * body RegistryRequest 
 * returns RegistryEnvelope
 **/
exports.getRegistryPOST = function(xAuthToken,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json;charset&#x3D;utf-8'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Data for sharholder
 *
 * xAuthToken String In requests head should be attached token from login service
 * body ShareholderRequest 
 * returns ShareholderEnvelope
 **/
exports.getShareholderPOST = function(xAuthToken,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json;charset&#x3D;utf-8'] = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

