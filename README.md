# Champs

Champs is an app that provides information about champions (playable characters) from the online game League of Legends. 

Static data such as a champion's role, skills or skins is retrived from Riot's Data Dragon api library. 

Champion statistics are gathered by using Riot's api endpoints to collect data on thousands of matches, which are then stored in a mongo database. Data from these matches is then analysed to store champion statistics such as winrate or pickrate. A script is run everyday to update the statistics.

## Installation

Clone this project locally and run:

```
cd backend
npm install
```

To start the project on port 3001 and view it in your browser:

`npm start`



