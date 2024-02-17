'use strict';


const { ethers, Contract } = require("ethers");
const { produceErrorResponse, offers, producePageEnvelope } = require("../mock/OfferMockData");
const { wrapResponse } = require("../utils/writer");
const TOKAbi = require("../abis/TOK.json").abi;
/**
 * All offers from TOK
 *
 * xAuthToken String In requests head should be attached token from login service
 * body AllOfferEnvelope
 * returns OfferEnvelope
 **/
exports.getAllOffersPOST = function (xAuthToken, body) {
    return new Promise(function (resolve, reject) {
        //infura provider
        const provider = new ethers.providers.InfuraProvider(process.env.NETWORK, process.env.INFURA_KEY);
        const iface = new ethers.utils.Interface(TOKAbi);
        //contract instance from abis/TOK.json
        const contract = new Contract(process.env.TOK_CONTRACT_ADDRESS, TOKAbi, provider);
        //get all events from contract
        contract.queryFilter("*").then(async (events) => {
            const orders = [];
            events.sort((a, b) => a.blockNumber - b.blockNumber);
            //iterate through orders
            //if it's NewOrderEvent then add to orders array
            //if it's TransactEvent modify order
            for (const event of events) {
                if (event.event === "NewOrderEvent") {
                    const parsed = iface.parseLog(event);
                    const orderId = parsed.args.orderId;
                    const order = await contract.getOrders(orderId);
                    orders.push(mapNewOrder(orderId, order));
                } else if (event.event === "DepositEquityTokenEvent") {
                    const parsed = iface.parseLog(event);
                    const orderId = parsed.args.orderId;
                    const order = orders.find((order) => order.order_id.eq(orderId));
                    order.status = 'EQUITY_DEPOSITED';
                } else if (event.event === "TransactEvent") {
                    const parsed = iface.parseLog(event);
                    const orderId = parsed.args.orderId;
                    const order = orders.find((order) => order.order_id.eq(orderId));
                    order.status = 'COMPLETED';
                }
            }        
            resolve(wrapResponse(orders));
        })
    });
};


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

function mapNewOrder(orderId, order) {
    return {
        order_id: orderId,
        status: "NEW",
        additionalInformation: {
            pricePerToken: order.price,
            tokenAddress: order.tokenAddress,
            currentState: order.currentState,
            totalOrderAmount: order.amount,
            ppraFee: order.ppraFee,
            equityTokenOwner: order.equityTokenOwner,
            equityTokenAmount: order.equityTokenAmount
        }
    };
}

