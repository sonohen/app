var server = require('../server');

exports['calculate'] = function(test) {
    test.equal(server.calculate(1,2), 3);
    test.done();
};
