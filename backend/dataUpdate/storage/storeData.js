module.exports = storeData = async (newStorage) => {
  if (new Date().getDay() % 2 === 0) {
    await newStorage.championStorage();
    await newStorage.playerStorage();  
  } else {
    await newStorage.matchStorage();
  }
  console.log('storage complete');
};


