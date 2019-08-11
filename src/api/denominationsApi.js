// This is simply a mock API for demonstration purposes; there are no real server calls here.

var denominations = require('./denominationsData').denominations;

var _clone = function(item) {
    return JSON.parse(JSON.stringify(item)); //Ensure that items are passed by value rather than reference.
;}

var DenominationsApi = {
    getAllDenominations: function() {
        return _clone(denominations);
    }
};

module.exports = DenominationsApi;
