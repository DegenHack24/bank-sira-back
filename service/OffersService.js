'use strict';


const {produceErrorResponse, offers, producePageEnvelope} = require("../mock/OfferMockData");
const {wrapResponse} = require("../utils/writer");
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
    /*
{
  "order_id": 121321,
  "page_envelope": {
    "page": 1,
    "items_on_page": 20 // Xdd
  }
}
     */

    console.log(body);

    return new Promise(function (resolve, reject) {
        const orderId = body?.order_id;
        const offerContent = offers.get(`${orderId}`);

        if (!orderId || !offerContent) {
            resolve(wrapResponse(produceErrorResponse(), 404));
        }

        console.log('offer', offerContent);
        console.log(offers.keys());

        resolve(wrapResponse(offerContent));
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
    /*
{
  "krs_e_number": "121321",
  "page_envelope": {
    "page": 1,
    "items_on_page": 20
  }
}
     */

    return new Promise(function (resolve, reject) {
        const itemsOnPage = body?.page_envelope?.items_on_page;
        const krsIssuer = body?.krs_e_number;

        if (!itemsOnPage || itemsOnPage <= 0 || !krsIssuer) {
            resolve(wrapResponse(produceErrorResponse(), 400));
        }

        let filteredData = [];

        for (let [key, value] of offers.entries()) {
            //We want only specific issuer
            for (const offerValue of value.offers) {
                console.log('offerValue', offerValue);
                if (offerValue.krs_e_number !== krsIssuer) {
                    continue;
                }

                filteredData.push(offerValue)
            }
        }

        const retDat = {
            "offers": filteredData,
            ...producePageEnvelope(itemsOnPage)
        };

        resolve(wrapResponse(retDat));

    });
}

