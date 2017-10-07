import fetch from 'isomorphic-fetch';

async function getData() {
    const res = await fetch('https://nfl-api.now.sh/api/nfl-odds')
    const data = await res.json()
    return data
  }

getData()
    .then(data => {
       const games = data.filter(x => (x.total > 0)).sort(x => (x.home_spread))
       
        for(const game of games){
            const { away_short_name, home_short_name, home_spread} = game
            console.log(`${away_short_name} @ ${home_short_name} ${home_spread}`)
        }
    })
    .catch(e => console.error(e))      
  
