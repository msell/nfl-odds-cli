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
        for(const game of data.data){
            const { away_short_name, home_short_name, home_spread} = game
            console.log(`${away_short_name} @ ${home_short_name} ${home_spread}`)
        }
    })
    .catch(e => console.error(e))      
  
