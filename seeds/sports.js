exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('baseball').del()
    .then(function () {
      // Inserts seed entries
      return knex('baseball').insert([
        { image: 'https://b.fssta.com/uploads/application/mlb/headshots/3646.vresize.350.425.medium.80.png', name: 'Justin Verlander', jersey_number: '10', position: 'Pitcher' },
        { image: 'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/29949.png', name: 'Madison Bumgarner', jersey_number: '12', position: 'Pitcher' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30112.png', name: 'Buster Posey', jersey_number: '28', position: 'Catcher' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30901.png', name: 'Brandon Belt', jersey_number: '9', position: 'First Base' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30469.png', name: 'Brandon Crawford', jersey_number: '35', position: 'Shortstop' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32087.png', name: 'Joe Panik', jersey_number: '90', position: 'Second Base' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/29212.png', name: 'Pablo Sandoval', jersey_number: '1', position: 'Third Base' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30461.png', name: 'Jarrod Dyson', jersey_number: '3', position: 'Left field' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/28513.png', name: 'Adam Jones', jersey_number: '5', position: 'Right Field' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/35779.png', name: 'Tim Locastro', jersey_number: '14', position: 'Left Field' },
        { image: 'https://gostanford.com/images/2017/10/19/Kayler_Detmer_DB_10102017_216.JPG', name: 'Kayler Detmer', jersey_number: '22', position: 'Pitcher' },
        { image: 'https://txstatebobcats.com/images/2016/10/11/Quincy_Charleston_2017_headshot.JPG', name: 'Quincy Charleston', jersey_number: '32', position: 'Pitcher' }
      ])
    })
}

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('hockey').del()
    .then(function () {
      // Inserts seed entries
      return knex('hockey').insert([
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3025614.png', name: 'Jonny Brodzinski', jersey_number: '10', position: 'Center' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3151791.png', name: 'Rourke Chartier', jersey_number: '12', position: 'Center' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3069411.png', name: 'Barclay Goodrow', jersey_number: '28', position: 'Left Wing' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/5251.png', name: 'Evander Kane', jersey_number: '9', position: 'Left Wing' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/3151792.png', name: 'Kevin Labanc', jersey_number: '35', position: 'Right Wing' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/2300.png', name: 'Brent Burns', jersey_number: '90', position: 'Defense' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/2590825.png', name: 'Brenden Dillon', jersey_number: '1', position: 'Defense' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/5528.png', name: 'Dalton Prout', jersey_number: '3', position: 'Defense' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/5086.png', name: 'Michael Haley', jersey_number: '5', position: 'Center' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/2501176.png', name: 'Aaron Dell', jersey_number: '14', position: 'Goalie' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/5096.png', name: 'Martin Jones', jersey_number: '22', position: 'Goalie' }
      ])
    })
}

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('basketball').del()
    .then(function () {
      // Inserts seed entries
      return knex('basketball').insert([
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2747.png', name: 'Andrew Bogut', jersey_number: '10', position: 'Center' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6429.png', name: 'Alec Burks', jersey_number: '12', position: 'Shooting Guard' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2991282.png', name: 'Willie Cauley-Stein', jersey_number: '28', position: 'Center' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png', name: 'Stephen Curry', jersey_number: '9', position: 'Point Guard' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3934621.png', name: 'Jacob Evans', jersey_number: '35', position: 'Shooting Guard' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6589.png', name: 'Draymond Green', jersey_number: '90', position: 'Power Forward' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3998.png', name: 'Jonas Jerebko', jersey_number: '1', position: 'Shooting Guard' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2595209.png', name: 'Damion Lee', jersey_number: '3', position: 'Shooting Guard' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2393.png', name: 'Shaun Livingston', jersey_number: '5', position: 'Point Guard' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2530923.png', name: 'Alfonzo McKinnie', jersey_number: '14', position: 'Small Forward' },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065836.png', name: 'Omari Spellman', jersey_number: '22', position: 'Power Forward' }
      ])
    })
}