# Champs - Automated champion statistical analysis app

## [Live site here](https://champs-gaming.herokuapp.com/)

Champs is an app that provides information about champions (playable characters) from the online game League of Legends. 

Static data such as a champion's role, skills or skins is retrived from Riot's Data Dragon api library.

Champion statistics are gathered by running a script in the backend of the app that collects and stores data from thousands of matches using Riot's api endpoints. The script then analyses data from these matches to calculate statistics for each champion such as their winrate or pickrate and stores them in a mongoDB database.

<img src="https://i.imgur.com/ufgz0mP.gif" alt="homepage" width="500" height="254" />
<img src="https://i.imgur.com/JjiYZEe.gif" alt="champion-showcase" width="500" height="254" />
<img src="https://i.imgur.com/2cuxxPh.gif" alt="filter-showcase" width="500" height="254" />

## Features

- View information about the lore and abilities of all the champions in the game.
- View up to date statistics for each champion in the game including item sets and matchup infomation.
- A script is run everyday using a redis server and Heroku Scheduler to gather new match data, update champion statistics and removing outdated data.
- Champions can be sorted and filtered based on various statistics and categories in order to find a set of champions that match a user's preferences.

## Script Process

The script runnning is split into a two day rotating process (To avoid excessive memory leaks from an long running automated process). On the first day, the champion database will check if there are any matches stored in the match database and use them to calculate and and store statistics for each champion. Api calls will then be made to Riot's player endpoints which returns the ids of a player's matches which are then stored in the player database. On the second day, match information will be retrived by using all the match ids from the player database and making calls to riot's match endpoints to gather and store information about each match inside the match database which will then be used for the champion database on the next day.

## Technologies

### Frontend
- Javascript
- HTML
- SCSS
- Webpack

### Backend
- Node.js
- Express
- MongoDB
- Mongoose
- Heroku Scheduler
