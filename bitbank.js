var fetch = require('node-fetch');

var bitbank = (function () {
  "use strict";
  var self = {};
  self.BitBank = function (api_key) {
    var bitbankSelf = {};
    bitbankSelf.api_key = api_key;


    bitbankSelf.fetchPair = function (currency_pair, callback) {
      fetch('https://bitbank.nz/api/forecasts/' + currency_pair + '?secret=' + bitbankSelf.api_key)
        .then(function (res) {
          return res.json();
        })
        .then(function (json) {
          callback(json['results']);
        }).catch(function (err) {
        console.log(err);
      });
    };
    bitbankSelf.fetchAllPairs = function (callback) {
      fetch('https://bitbank.nz/api/forecasts' + '?secret=' + bitbankSelf.api_key)
        .then(function (res) {
            return res.json();
          })
        .then(function (json) {
          var results = json['results'];
          var pairToFeaturesets = {}
          for (var i = 0; i < results.length; i++) {
            var featureset = results[i];
            pairToFeaturesets[featureset.currency_pair] = featureset;
          }
          callback(pairToFeaturesets);
        }).catch(function (err) {
        console.log(err);
      });
    }
    return bitbankSelf;
  };


  return self
})();

module.exports = bitbank;
