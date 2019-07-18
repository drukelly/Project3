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
