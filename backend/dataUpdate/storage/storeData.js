module.exports = storeData = async (newStorage) => {
  if (new Date().getDay() % 2 === 1) {
    await newStorage.championStorage();
    await newStorage.playerStorage();  
  } else {
    await newStorage.matchStorage();
  }
  console.log('storage complete');
  process.exit(0);
};


