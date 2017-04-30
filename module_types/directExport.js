// This module directly export function using module.export attribute
// basically it replace the exports object with a function.
module.exports = function() {
    console.log('Hello from a direct export function.');
};