'use strict';


/**
 * Variable for an authorization
 * Normally for connection with this service you should buy a Standard Service certificate. The certyfikat should be issued for a RSA or ED key. For the hackathone challenge you won't need that.
 *
 * body WalletURI 
 * returns ChallengeToken
 **/
exports.challengePOST = function(body) {
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
 * Client authorization
 *
 * xAuthToken String In requests head should be attached temporary token from challenge service/Nagłówek musi zawierac tymczasowy token uzyskany z usługi challenge
 * body ChallengeVerification Challenge should be sign by user's private key matched with wallet_address/Challenge musi zostać podpisany za pomocą klucza prywatnego użytkownika powiązanego z podanym wallet_address
 * returns RegularToken
 **/
exports.loginPOST = function(xAuthToken,body) {
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

