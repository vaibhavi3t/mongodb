const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/mariochar');

// Describe test

describe('Saving records', function() {
  
  // Create tests
  it('Saving a record to database', function(done) {
    var char = new MarioChar({
      name: 'Mario'
    });

    char.save().then(function() {
      assert(char.isNew === false);
      done();
    });
  });
});