var bitbank = require('../bitbank.js');
//var bitbank = require('bitbank-node-api');
var bitbankApi = bitbank.BitBank('TEST_API_KEY');

//fetch latest forecasts for all pairs
bitbankApi.fetchAllPairs(function (pairToFeaturesets) {
  //console.log(pairToFeaturesets)
})

//fetch latest forecasts for a single pair
bitbankApi.fetchPair('USDT_BTC', function (featureset) {
  console.log(featureset)
})

//fetch historical forecasts ~4 hours of forecasts 
//bitbankApi.getHistoricalFeaturesets('USDT_BTC', function (featuresets) {
//})

