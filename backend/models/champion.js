const mongoose = require('mongoose');

const dbUrl = process.env.MONGODB_URI;

mongoose.connect(dbUrl)
  .then(result => {
    console.log('connected to mongoDB');
  })
  .catch((error) => {
    console.log('failed to connect to mongoDB', error.message);
  });

const championSchema = new mongoose.Schema({
  name: String,
  wins: Number,
  loses: Number,
})

championSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
    delete returnedObject._id;
  }
});

module.exports = mongoose.model('Champion', championSchema);
