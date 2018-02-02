# bitbank
API BitBank

# Test API
//fetch latest forecasts for a single pair
bitbankApi.fetchPair('USDT_BTC', function (featureset) {
  console.log(featureset)
})

node spec/test-bitbank-spec.js
