'use strict';


const {wrapResponse} = require("../utils/writer");
const {ppraTokens} = require("../mock/TokenMockData");
const {Contract, ethers} = require("ethers");
const {getAllOffersPOST} = require("./OffersService");
const {produceErrorResponse} = require("../mock/OfferMockData");
const EquityTokenABI = require("../abis/EquityToken.json").abi;
/**
 * All of my tokens
 *
 * xAuthToken String In requests head should be attached token from login service
 * returns TokenEnvelope
 **/
exports.getMyTokensPOST = async function (xAuthToken) {
    const userAddress = xAuthToken;
    const offers = (await getAllOffersPOST(userAddress, {})).body;

    if (!userAddress) {
        return wrapResponse(produceErrorResponse('Invalid wallet address'));
    }

    const offersCountByAddress = offers.reduce((acc, offer) => {
        if (acc[offer.additionalInformation.tokenAddress]) {
            acc[offer.additionalInformation.tokenAddress]++;
        } else {
            acc[offer.additionalInformation.tokenAddress] = 1;
        }
        return acc;
    }, {});
    const provider = new ethers.providers.InfuraProvider(process.env.NETWORK, process.env.INFURA_KEY);
    const tokenNameByAddress = new Map(offers.map(offer => [offer.additionalInformation.tokenAddress, offer.additionalInformation.equityTokenName]));

    return new Promise(async function (resolve, reject) {
        for (const token of ppraTokens) {
            console.log('token.address', token.address)
            const contract = new Contract(token.address, EquityTokenABI, provider);
            const balance = await contract.balanceOf(userAddress);
            //if balance is 0 then remove token from list
            if (balance.eq(0)) {
                ppraTokens.splice(ppraTokens.indexOf(token), 1);
                continue;
            }
            token.balance = balance;
            token.offerCount = offersCountByAddress[token.address] || 0;
            token.name = tokenNameByAddress.get(token.address);
        }

        resolve(wrapResponse(ppraTokens));
    });
}


/**
 * All tokens for specific issuer
 *
 * xAuthToken String In requests head should be attached token from login service
 * body TokenForSpecificIssuerRequest
 * returns TokenEnvelope
 **/
exports.getSpecificIssuerTokensPOST = function (xAuthToken, body) {
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
 * All tokens issued by specific PPRA
 *
 * xAuthToken String In requests head should be attached token from login service
 * returns TokenEnvelope
 **/
exports.getTokensPOST = function (xAuthToken) {
    return new Promise(function (resolve, reject) {
        resolve(wrapResponse(ppraTokens))
    });
}

