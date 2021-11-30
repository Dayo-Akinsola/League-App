const fs = require('fs');

/*
  The purpose of this module is to grab a rank from the ranks array
  and use it in the PlayerSummonerIds factory function.
*/

const selectCurrentRank = (ranks, index) => {
  index = index % 4;
  const currentRank = ranks[index];
  
  return currentRank;
}

const getCurrentRank = (currentRank) => {
  return currentRank;
}

const incrementCurrentRank = (index) => {
  index += 1;
  fs.writeFile('./dataUpdate/storage/ranks.txt', index.toString(), (err) => {
    if (err) {
      console.log(err);
    } 
  })
} 

module.exports = getRank = async () => {
  const ranks = ['I', 'II', 'III', 'IV'];


  const fileNum = new Promise((resolve, reject) => {
    return fs.readFile('./dataUpdate/storage/ranks.txt', 'utf-8', (err, data) => {
      let index = parseInt(data);
      const currentRank = selectCurrentRank(ranks, index);
      incrementCurrentRank(index);
      return resolve(getCurrentRank(currentRank));
    });
  })

  return fileNum;
}



