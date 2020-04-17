const mongoose = require('mongoose');


// Connect to the db befor test run
before(function(done) {
  // Connect to mongodb
  mongoose.connect('mongodb+srv://root:root1234@cluster0-c5qhj.mongodb.net/mongodb-test');

  mongoose.connection.once('open', function() {
    console.log('connection has been made');
    done();
  }).on('error', function(error) {
    console.log('Connection error:', error);
  });
});