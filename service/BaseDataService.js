'use strict';


const {wrapResponse} = require("../utils/writer");
const {issuers, peers} = require("../mock/BaseDataMockData");
const { getTokensPOST } = require("./AddressesForTokensService");
const { Contract } = require("ethers");
const EquityTokenABI = require("../abis/EquityToken.json").abi;
/**
 * Issuers list
 *
 * xAuthToken String In requests head should be attached token from login service
 * body IssuersRequest
 * returns IssuerEnvelope
 **/
exports.getIssuersPOST = function (xAuthToken, body) {
    return new Promise(function (resolve, reject) {
        resolve(wrapResponse(issuers));
    });
}


/**
 * Papers list for specific client
 *
 * xAuthToken String In requests head should be attached token from login service
 * body MyAssetsRequest
 * returns MyAssetsEnvelope
 **/
exports.getMyAssetsPOST = function (xAuthToken, body) {
    return new Promise(async function (resolve, reject) {
        const tokens = await getTokensPOST("mock-token");
        const provider = new ethers.providers.InfuraProvider(process.env.NETWORK, process.env.INFURA_KEY);
        for (const token of tokens) {
            const contract = new Contract(token.address, EquityTokenABI, provider);
            const balance = await contract.balanceOf(body.walletAddress);
            token.balance = balance;
        }

        resolve(wrapResponse(tokens));
    });
}


/**
 * Other API SIRA addresses list
 *
 * returns PeersEnvelope
 **/
exports.getPeersGET = function () {
    return new Promise(function (resolve, reject) {
        resolve(wrapResponse(peers))
    });
}


/**
 * All data for specific registry
 *
 * xAuthToken String In requests head should be attached token from login service
 * body RegistryRequest
 * returns RegistryEnvelope
 **/
exports.getRegistryPOST = function (xAuthToken, body) {
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
 * Data for sharholder
 *
 * xAuthToken String In requests head should be attached token from login service
 * body ShareholderRequest
 * returns ShareholderEnvelope
 **/
exports.getShareholderPOST = function (xAuthToken, body) {
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

