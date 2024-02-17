'use strict';


/**
 * All of my tokens
 *
 * xAuthToken String In requests head should be attached token from login service
 * returns TokenEnvelope
 **/
exports.getMyTokensPOST = function(xAuthToken) {
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
 * All tokens for specific issuer
 *
 * xAuthToken String In requests head should be attached token from login service
 * body TokenForSpecificIssuerRequest 
 * returns TokenEnvelope
 **/
exports.getSpecificIssuerTokensPOST = function(xAuthToken,body) {
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
 * All tokens issued by specific PPRA
 *
 * xAuthToken String In requests head should be attached token from login service
 * returns TokenEnvelope
 **/
exports.getTokensPOST = function(xAuthToken) {
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

