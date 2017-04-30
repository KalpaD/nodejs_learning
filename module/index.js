// This file is the entry point to module it glues the
// other components of the module together.
var english = require('./english');
var spanish = require('./spanish');
var sinhala = require('./sinhala');

module.exports = {
    spanish: spanish,
    english: english,
    sinhala: sinhala
};