'use strict';


const {wrapResponse} = require("../utils/writer");
const {ppraTokens} = require("../mock/TokenMockData");
const { Contract, ethers } = require("ethers");
const EquityTokenABI = require("../abis/EquityToken.json").abi;
/**
 * All of my tokens
 *
 * xAuthToken String In requests head should be attached token from login service
 * returns TokenEnvelope
 **/
exports.getMyTokensPOST = function (xAuthToken) {
    return new Promise(async function (resolve, reject) {
        const provider = new ethers.providers.InfuraProvider(process.env.NETWORK, process.env.INFURA_KEY);
        for (const token of ppraTokens) {
            const contract = new Contract(token.address, EquityTokenABI, provider);
            const balance = await contract.balanceOf(xAuthToken);
            token.balance = balance;
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

