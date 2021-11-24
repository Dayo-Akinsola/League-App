const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const dbUrl = process.env.MONGODB_URI;

mongoose.connect(dbUrl)
  .then(result => {
    console.log('connected to match mongoDB');
  })
  .catch((error) => {
    console.log('failed to connect to match mongoDB', error.message);
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