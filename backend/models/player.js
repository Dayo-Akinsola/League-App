const dotenv = require('dotenv');
dotenv.config();
const dbUrl = process.env.MONGODB_URI;

const mongoose = require('mongoose');


mongoose.connect(dbUrl, {useNewUrlParser: "true", useUnifiedTopology: "true"})
  .then(result => {
    console.log('connected to player mongoDB');
  })
  .catch((error) => {
    console.log('failed to connect to player mongoDB', error.message);
  });

const playerSchema = new mongoose.Schema({
  summonerId: String,
  uniqueId: String,
  matchIds: [String],
});

playerSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
    delete returnedObject._id;
  }
});

module.exports = mongoose.model('Player', playerSchema);


