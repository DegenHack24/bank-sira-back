'use strict';


/**
 * All offers from TOK
 *
 * xAuthToken String In requests head should be attached token from login service
 * body AllOfferEnvelope
 * returns OfferEnvelope
 **/
exports.getAllOffersPOST = function (xAuthToken, body) {
    return new Promise(function (resolve, reject) {
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
 * Details for specific offer
 *
 * xAuthToken String In requests head should be attached token from login service
 * body OfferDetailsEnvelope
 * returns OfferEnvelope
 **/
exports.getOfferPOST = function (xAuthToken, body) {
    return new Promise(function (resolve, reject) {
        var examples = {
            "offer": {
                "id": 1231,
                "name": "mm"
            }
        };
        examples['application/json;charset&#x3D;utf-8'] = {};
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}


/**
 * All offers for specific issuer
 *
 * xAuthToken String In requests head should be attached token from login service
 * body OfferForIssuerEnvelope
 * returns OfferEnvelope
 **/
exports.getOffersPOST = function (xAuthToken, body) {
    return new Promise(function (resolve, reject) {
        var examples = {};
        examples['application/json;charset&#x3D;utf-8'] = {};
        if (Object.keys(examples).length > 0) {
            resolve(examples[Object.keys(examples)[0]]);
        } else {
            resolve();
        }
    });
}

