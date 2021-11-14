const express = require('express');
const app = express();
const Champion = require('./models/champion');
//const saveChampionsToDb = require('./storage');

//saveChampionsToDb();

app.get('/:championName', async (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  const champion = await Champion.findOne({championName: request.params.championName});
  console.log(champion);
  response.json(champion);
});

app.get('/champions', async (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
  const allChampions = await Champion.find({});
  response.json(allChampions);
  console.log(allChampions);
})


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
