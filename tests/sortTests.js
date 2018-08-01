const sorts    = require('../sorts/allSorts');
const expect   = require('chai').expect;
const values   = Object.values(sorts);

describe('Sorts', function() {
    values.map(value => {
        describe(`${value.name}`, function() {
            it('should be equal', function() {
                let call = value();
                let answer = [1, 2, 3, 4, 5];

                expect(call).to.be.deep.equal(answer);
            });
        });
    });
});