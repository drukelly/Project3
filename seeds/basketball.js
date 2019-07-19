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
