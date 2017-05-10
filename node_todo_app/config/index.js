var configValues = require('./config');

module.exports = {
    getDBConString: function() {
        return 'mongodb://' + configValues.username + ':' + configValues.password +
        '@localhost:27017/nodetodo_db';
    }
}