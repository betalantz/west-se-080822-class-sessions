const game = gameObject()
const players = playersObject()
const teams = Object.values(game)

function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assits: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evens": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assits: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assits: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assits: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assits: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assits: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismack Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assits: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assits: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assits: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Hayword": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assits: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

function playersObject(){
  return {...game.home.players , ...game.away.players}
}

// the logic in this function could have been used inside of numPointsScored()
// and shoeSize(), but whenever you see repeated logic
// you should try to abstract it into a reusable helper function
function playerStats(playerName){
  return players[playerName]
}

function numPointsScored(playerName){
  return playerStats(playerName).points
}

function shoeSize(playerName){
  return playerStats(playerName).shoe
}

function teamNames(){
  // return teams.map((team) => { return team.teamName})
  return teams.map(team => team.teamName)
}

function findByTeamName(teamName){
  return teams.find(team => team.teamName === teamName)
}

function teamColors(teamName){
  return findByTeamName(teamName).colors
}

function playerNumbers(teamName){
  const playersObj = findByTeamName(teamName).players
  const statsArr = Object.values(playersObj)
  return statsArr.map((statsObj) => statsObj.number)
  // return Object.values(findByTeamName(teamName).players).map(statsObj => statsObj.number)
}

function bigShoeRebounds(){
  // get an array of all player stats objects
  let sortedPlayers = Object.values(players)
  // sort the object in the array in place by shoe size
  // so the stats obj with the largest shoe will be the 
  // first element
  sortedPlayers.sort((a, b) => {
    if (a.shoe < b.shoe) return -1;
    if (a.shoe > b.shoe) return 1;
    return 0
  })
  // grab the first object by index and return the rebounds value
  return sortedPlayers[0].rebounds
}

// returns an array of the player names who have shoe sizes bigger than 15
function bigFeetPlayers(){
  // Object.entries keeps player names associated with their stats
  const playerArr = Object.entries(players)
  // debugger
  // .filter will return a new array of player arrays only with shoe > 15, then .map will transform that into an array of just the name strings
  return playerArr.filter(player => player[1].shoe > 15).map(pArr => pArr[0])
}

// BONUS

function mostPointsScored(){
  // get an array of arrays of players
  // will be useful because we keep player names
  // assoc with their stats
  let sortedPlayers = Object.entries(players)
  // use array method sort to sort the nested arrays in place by points
  sortedPlayers.sort((a, b) => {
    if (a[1].points < b[1].points) return 1;
    if (a[1].points > b[1].points) return -1;
    return 0
  })
  // use 2 square brackets to first get the first inner array
  // from the sortedPlayers array
  // then the second brackets get the first element of the inner
  // array, which is the name
  return sortedPlayers[0][0]
}

function winningTeam(){
  // I want to create an array of team objects. I want an array so I can sort it by the team scores
  // I'll create my own objects too, each with the teamname associated with the score
  // I use Object.values to get an array of player stats, then reduce() can total the points property of all the stats
  let teamsWithScores = [
    {
      teamName: game.home.teamName,
      score: Object.values(game.home.players).reduce((sum, player) => sum + player.points, 0)
    },
    {
      teamName: game.away.teamName,
      points: Object.values(game.away.players).reduce((sum, player) => sum + player.points, 0)
    },
  ]
  // I sort my custom array with custom objects by the score and then take the first element from the array
  const winner = teamsWithScores.sort((a, b) => b.score - a.score)[0]
  console.log('teamsWithScores: ', teamsWithScores);
  return winner.teamName // I use .dotnotation to return the name of the winning team
}

// this question is faulty in that there are two players 
// with equally long names for the longest criteron
function playerWithLongestName(){
  // Object.keys returns an array of string-the player names
  // Then we sort those strings in the array by their length property
  let sortedNames = Object.keys(players).sort((a, b) => b.length - a.length)
  // We can grab the first element from the sorted array with [] index notation
  return sortedNames[0]
}

// SUPER BONUS

function doesLongNameStealATon(){
  let sortedPlayers = Object.entries(players)
  // console.log('sortedPlayers: ', sortedPlayers);
  sortedPlayers.sort((a, b) => {
    if (a[1].steals < b[1].steals) return -1;
    if (a[1].steals > b[1].steals) return 1;
    return 0
  })
  const mostStealsPlayer = sortedPlayers[0][0]
  return playerWithLongestName() == mostStealsPlayer
}

// Object.keys: http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// Object.values: http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
// Object.entries: http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// for...in loop: http://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

console.log(numPointsScored('Brendan Hayword'))
console.log(shoeSize('DeSagna Diop'))
console.log(teamColors('Charlotte Hornets'));
console.log(playerNumbers('Brooklyn Nets'));
console.log(bigShoeRebounds())
console.log(bigFeetPlayers())
console.log(mostPointsScored())
console.log(winningTeam())
console.log(playerWithLongestName())
console.log(doesLongNameStealATon())