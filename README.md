# Champs

[Live site here](https://champs-gaming.herokuapp.com/)

Champs is an app that provides information about champions (playable characters) from the online game League of Legends. 

Static data such as a champion's role, skills or skins is retrived from Riot's Data Dragon api library. 

Champion statistics are gathered by using Riot's api endpoints to collect data on thousands of matches, which are then stored in a mongo database. Data from these matches is then analysed to store champion statistics such as winrate or pickrate. A script is run everyday to update the statistics.

## Features

- View information about the lore and abilities of all the champions in the game.
- View up to date statistics for each champion in the game including item sets and matchup infomation.
- A script is run everyday using a redis server and Heroku Scheduler to gather new match data, update champion statistics and removing outdated data.
- Champions can be sorted and filtered based on various statistics and categories in order to find a set of champions that match a user's preferences.

## Technologies

### Frontend
- Javascript
- HTML
- SCSS

### Backend
- Node.js
- Express
- MongoDB
- Mongoose




