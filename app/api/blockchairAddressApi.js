var request = require("request");
var utils = require("./../utils.js");


function getAddressDetails(address, scriptPubkey, sort, limit, offset) {
	// Note: blockchair api seems to not respect the limit parameter, always using 100
	return new Promise(function(resolve, reject) {
		var options = {
//			url: `https://api.blockchair.com/bitcoin/dashboards/address/${address}/?offset=${offset}`,
			url: `http://127.0.0.1:4444/api/getaddressbalance/${address}`,
			headers: {
				'User-Agent': 'request'
			}
		};

		request(options, function(error, response, body) {
			if (error == null && response && response.statusCode && response.statusCode == 200) {
				var responseObj = JSON.parse(body);
//				responseObj = responseObj.data[address];
				responseObj = responseObj.result;

				var result = {};

				result.txids = [];

				// blockchair doesn't support offset for paging, so simulate up to the hard cap of 2,000
//				for (var i = 0; i < Math.min(responseObj.transactions.length, limit); i++) {
//					var txid = responseObj.transactions[i];

//					result.txids.push(txid);
//				}

//				result.txCount = responseObj.address.transaction_count;
//				result.totalReceivedSat = responseObj.address.received;
//				result.totalSentSat = responseObj.address.spent;
//				result.balanceSat = responseObj.address.balance;
//				result.source = "blockchair.com";

				result.txCount = 0;
				result.totalReceivedSat = responseObj.received;
				result.balanceSat = responseObj.balance;
				result.totalSentSat = result.totalReceivedSat - result.balanceSat;
				result.source = "core node";			

				resolve({addressDetails:result});

			} else {
				var fullError = {error:error, response:response, body:body};

				utils.logError("308dhew3w83", fullError);

				reject(fullError);
			}
		});
	});
}


module.exports = {
	getAddressDetails: getAddressDetails
};