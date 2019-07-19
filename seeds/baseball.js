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