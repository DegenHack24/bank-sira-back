'use strict';


/**
 * Details about specific transaction
 *
 * xAuthToken String In requests head should be attached token from login service
 * body GetAssetInfoRequest 
 * returns GetAssetInfoEnvelope
 **/
exports.getAssetInfoPOST = function(xAuthToken,body) {
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

