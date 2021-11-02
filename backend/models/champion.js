const mongoose = require('mongoose');

const dbUrl = process.env.MONGODB_URI;

mongoose.connect(dbUrl)
  .then(result => {
    console.log('connected to mongoDB');
  })
  .catch((error) => {
    console.log('failed to connect to mongoDB', error.message);
  });

const kdaSchema = new mongoose.Schema({
  kills: String,
  deaths: String,
  assists: String,
})

const damageSchema = new mongoose.Schema({
  physicalDamage: Number,
  magicDamage: Number,
  trueDamage: Number,
  totalDamage: Number,
})

const championSchema = new mongoose.Schema({
  championName: String,
  winRate: Number,
  pickRate: Number,
  kdaRatio: kdaSchema,
  damagePerMatch: damageSchema,
  lane: String,
  itemChoices: [
    [String],
    [String],
    [String],
  ],
  matchUps: mongoose.Schema.Types.Mixed,
})

championSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
    delete returnedObject._id;
  }
});

module.exports = mongoose.model('Champion', championSchema);
