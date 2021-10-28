const mongoose = require('mongoose');

const dbUrl = process.env.MONGODB_URI;

mongoose.connect(dbUrl)
  .then(result => {
    console.log('connected to mongoDB');
  })
  .catch((error) => {
    console.log('failed to connect to mongoDB', error.message);
  });

const matchSchema = new mongoose.Schema({
  matchId: String,
  matchData: mongoose.Schema.Types.Mixed,
})

matchSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
    delete returnedObject._id;
  }
})

module.exports = mongoose.model('Match', matchSchema);