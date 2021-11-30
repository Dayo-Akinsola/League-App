module.exports = storeData = async (newStorage) => {
  await newStorage.playerStorage();  
  console.log('moving to match storage');
  await newStorage.matchStorage();
  console.log('moving to champion storage');
  await newStorage.championStorage();
  console.log('storage complete');
};


