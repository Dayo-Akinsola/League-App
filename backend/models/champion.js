const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

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
  physicalDamage: {
    value: Number,
    percentage: Number,
  },
  magicDamage: {
    value: Number,
    percentage: Number,
  },
  trueDamage: {
    value: Number,
    percentage: Number,
  },
  totalDamage: {
    value: Number,
    percentage: Number,
  }
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

kdaSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
    delete returnedObject._id;
  }
});

damageSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
    delete returnedObject._id;
  }
});

module.exports = mongoose.model('Champion', championSchema);
