'use strict';


/**
 * Counter offer
 *
 * xAuthToken String In requests head should be attached token from login service
 * body CounterOfferNegotiation 
 * returns OfferNegotiationResponse
 **/
exports.counterOfferNegotiationPOST = function(xAuthToken,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json;charset&#x3D;utf-8'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Blocking specific negotiation
 *
 * xAuthToken String In requests head should be attached token from login service
 * body LockOfferNegotiation 
 * returns OfferNegotiationResponse
 **/
exports.lockOfferNegotiationPOST = function(xAuthToken,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json;charset&#x3D;utf-8'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Offer negotiation
 *
 * xAuthToken String In requests head should be attached token from login service
 * body OfferNegotiation 
 * returns OfferNegotiationResponse
 **/
exports.offerNegotiationPOST = function(xAuthToken,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json;charset&#x3D;utf-8'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

