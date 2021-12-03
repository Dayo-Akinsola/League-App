const dotenv = require('dotenv');
dotenv.config();
const dbUrl = process.env.MONGODB_URI;

const mongoose = require('mongoose');

mongoose.connect(dbUrl, {useNewUrlParser: "true", useUnifiedTopology: "true"})
  .then(result => {
    console.log('connected to match mongoDB');
  })
  .catch((error) => {
    console.log('failed to connect to match mongoDB', error.message);
  });

const participantsSchema = new mongoose.Schema({
  championName: String,
  assists: Number,
  deaths: Number,
  kills: Number,
  item0: Number,
  item1: Number,
  item2: Number,
  item3: Number,
  item4: Number,
  item5: Number,
  item6: Number,
  magicDamageDealtToChampions: Number,
  physicalDamageDealtToChampions: Number,
  trueDamageDealtToChampions: Number,
  totalDamageDealtToChampions: Number,
  teamPosition: String,
  win: Boolean,
})

const infoSchema =  new mongoose.Schema({
  gameCreation: String,
  participants: [participantsSchema],
})

const matchDataSchema =  new mongoose.Schema({
  info: infoSchema,
})

const matchSchema = new mongoose.Schema({
  matchId: String,
  matchData: matchDataSchema,
})

matchSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
    delete returnedObject._id;
  }
})

module.exports = mongoose.model('Match', matchSchema);