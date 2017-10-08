import fetch from 'isomorphic-fetch';
import Table from 'cli-table2'

async function getData() {
    const res = await fetch('https://nfl-api.now.sh/api/nfl-odds')
    const data = await res.json()
    return data
  }

getData()
    .then(data => {
       const games = data.filter(x => (x.total > 0)).sort(x => (x.home_spread))      
       const table = new Table({
         head: ['Away', 'Home', 'Home Spread']
       })

        for(const game of games){
            const { away_short_name, home_short_name, home_spread} = game
            table.push([away_short_name, home_short_name, home_spread])            
        }

        console.log(table.toString())
    })
    .catch(e => console.error(e))      
  
