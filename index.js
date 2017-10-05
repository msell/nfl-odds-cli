#!/usr/local/bin/node
require('es6-promise').polyfill();
require('isomorphic-fetch');

async function getData() {
    const settings = {
        headers: { Referer: 'http://www.oddsshark.com/nfl/odds' }
    }

    const res = await fetch('http://io.oddsshark.com/upcoming/us/nfl', settings)
    const data = await res.json()
    return data
  }
  


getData()
    .then(data => {
        games = data.data.filter(x => (x.total > 0)).sort(x => (x.home_spread))
       
        for(const game of games){
            const { away_short_name, home_short_name, home_spread} = game
            console.log(`${away_short_name} @ ${home_short_name} ${home_spread}`)
        }
    })
    .catch(e => console.error(e))      
  
