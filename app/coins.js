var btc = require("./coins/btc.js");
var ltc = require("./coins/ltc.js");
var evr = require("./coins/evr.js");

module.exports = {
	"EVR": evr,
	"BTC": btc,
	"LTC": ltc,

	"coins":["EVR", "BTC", "LTC"]
};