const express = require('express');
const app = express();
const Champion = require('./models/champion');
//const saveChampionsToDb = require('./storage');

//saveChampionsToDb();

app.get('/:championName', async (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  const champion = await Champion.findOne({championName: request.params.championName});
  response.json(champion);
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
