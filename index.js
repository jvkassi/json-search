// Your code here
// load bluebird
const Promise = require('bluebird')
// promisify fs module
const fs = Promise.promisifyAll(require('fs'))

// read station file
fs.readFileAsync('./stations.json')
  .then(data => JSON.parse(data))
  .then(stations => {
    // Search for every station in the city of Paris
    const stationsInParis = stations.filter(x => x.city === 'Paris')

    // print out stations in Paris
    console.log(stationsInParis)
    
    // Find the closest station to Lyon Part-Dieu station
    const stationLyonPartDieu = stations[3]
    const stationLyonPartDieuLoc = stationLyonPartDieu.lat + stationLyonPartDieu.long

    // reduce array to find closest locations
    const closestToLyonPartDieu = stations.slice(0,2).reduce((x,y) => {

      // compare stations locations by summing up latitude and longitude

      x.loc = x.lat + x.long
      y.loc = y.lat + y.long

      if((x.loc - stationLyonPartDieuLoc) > (y.loc - stationLyonPartDieuLoc)) {
       return y 
      }
      else { 
       return x 
      } 
    })

    // print out closest station
    console.log(closestToLyonPartDieu.station_name)
  })
