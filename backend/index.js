const express = require('express');
const app = express();
const Champion = require('./models/champion');
app.use(express.static('dist'));

app.get('/champions', async (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  const allChampions = await Champion.find({});
  response.json(allChampions);
});


app.get('/:championId', async (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  try {
    const champion = await Champion.findOne({id: request.params.championId});
    console.log(champion);
    response.json(champion);
  }
  catch {
    response.status(404).send({ error: 'Champion does not exist'});
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
