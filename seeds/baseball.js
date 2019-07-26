exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('baseball').del()
    .then(function () {
      // Inserts seed entries
      return knex('baseball').insert([
        { image: 'https://b.fssta.com/uploads/application/mlb/headshots/3646.vresize.350.425.medium.80.png', name: 'Justin Verlander', jersey_number: '10', position: 'Pitcher', games_played: 22, wins: 13, losses: 4, era: 2.86, ip: 144.2, so: 183 },
        { image: 'http://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/29949.png', name: 'Madison Bumgarner', jersey_number: '12', position: 'Pitcher', games_played: 22, wins: 5, losses: 7, era: 3.66, ip: 132.2, so: 134 },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30112.png', name: 'Buster Posey', jersey_number: '28', position: 'Catcher', ab: 256, r: 31, hits: 66, hr: 5, rbi: 28, sb: 0, batting_average: 0.258 },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30901.png', name: 'Brandon Belt', jersey_number: '9', position: 'First Base', ab: 334, r: 55, hits: 80, hr: 11, rbi: 36, sb: 3, batting_average: 0.240 },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30469.png', name: 'Brandon Crawford', jersey_number: '35', position: 'Shortstop', ab: 326, r: 39, hits: 77, hr: 9, rbi: 43, sb: 2, batting_average: 0.236 },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/32087.png', name: 'Joe Panik', jersey_number: '90', position: 'Second Base', ab: 328, r: 33, hits: 77, hr: 3, rbi: 27, sb: 4, batting_average: 0.235 },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/29212.png', name: 'Pablo Sandoval', jersey_number: '1', position: 'Third Base', ab: 233, r: 38, hits: 60, hr: 12, rbi: 36, sb: 1, batting_average: 0.258 },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/30461.png', name: 'Jarrod Dyson', jersey_number: '3', position: 'Left field', ab: 261, r: 45, hits: 66, hr: 6, rbi: 21, sb: 22, batting_average: 0.253 },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/28513.png', name: 'Adam Jones', jersey_number: '5', position: 'Right Field', ab: 358, r: 51, hits: 96, hr: 13, rbi: 45, sb: 2, batting_average: 0.268 },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/mlb/players/full/35779.png', name: 'Tim Locastro', jersey_number: '14', position: 'Left Field', ab: 133, r: 21, hits: 34, rbi: 14, sb: 9, batting_average: 0.256 },
        { image: 'https://gostanford.com/images/2017/10/19/Kayler_Detmer_DB_10102017_216.JPG', name: 'Kayler Detmer', jersey_number: '22', position: 'Pitcher', era: 11.92, ip: 12.1, so: 5 },
        { image: 'https://txstatebobcats.com/images/2016/10/11/Quincy_Charleston_2017_headshot.JPG', name: 'Quincy Charleston', jersey_number: '32', position: 'Pitcher', ip: 6.1, so: 7 }
      ])
    })
}
