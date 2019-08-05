exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('basketball').del()
    .then(function () {
      // Inserts seed entries
      return knex('basketball').insert([
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2747.png', name: 'Andrew Bogut', jersey_number: '12', position: 'Center', games_played: 11, rebounds: 5.0, pts: 3.5, ast: 1.0, field_goals: 50.0, '3pt': 36.3, free_throws: 100.0, steals: 0.3, blocks: 0.7 },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6429.png', name: 'Alec Burks', jersey_number: '13', position: 'Shooting Guard', games_played: 64, rebounds: 3.7, pts: 8.8, ast: 2.0, field_goals: 40.5, '3pt': 0.00, free_throws: 82.3, steals: 0.6, blocks: 0.3 },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2991282.png', name: 'Willie Cauley-Stein', jersey_number: '00', position: 'Center', games_played: 81, rebounds: 8.4, pts: 11.9, ast: 2.4, field_goals: 55.6, '3pt': 50.0, free_throws: 55.1, steals: 1.2, blocks: 0.6 },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png', name: 'Stephen Curry', jersey_number: '30', position: 'Point Guard', games_played: 69, rebounds: 5.3, pts: 27.3, ast: 5.2, field_goals: 47.2, '3pt': 43.7, free_throws: 91.6, steals: 1.3, blocks: 0.4 },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3934621.png', name: 'Jacob Evans', jersey_number: '10', position: 'Shooting Guard', games_played: 30, rebounds: 0.8, pts: 1.3, ast: 0.8, field_goals: 34.0, '3pt': 26.7, free_throws: 0.00, steals: 0.2, blocks: 0.1 },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6589.png', name: 'Draymond Green', jersey_number: '23', position: 'Power Forward', games_played: 66, rebounds: 7.3, pts: 7.4, ast: 6.9, field_goals: 44.5, '3pt': 28.5, free_throws: 69.2, steals: 1.4, blocks: 1.1 },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3998.png', name: 'Jonas Jerebko', jersey_number: '21', position: 'Shooting Guard', games_played: 73, rebounds: 3.9, pts: 6.3, ast: 1.3, field_goals: 45.9, '3pt': 36.7, free_throws: 80.0, steals: 0.4, blocks: 0.2 },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2595209.png', name: 'Damion Lee', jersey_number: '1', position: 'Shooting Guard', games_played: 32, rebounds: 2.0, pts: 4.9, ast: 0.4, field_goals: 44.1, '3pt': 39.7, free_throws: 86.4, steals: 0.4, blocks: 0.00 },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2393.png', name: 'Shaun Livingston', jersey_number: '34', position: 'Point Guard', games_played: 64, rebounds: 1.8, pts: 4.0, ast: 1.8, field_goals: 51.9, '3pt': 0.00, free_throws: 78.4, steals: 0.5, blocks: 0.4 },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2530923.png', name: 'Alfonzo McKinnie', jersey_number: '28', position: 'Small Forward', games_played: 72, rebounds: 3.4, pts: 4.7, ast: 0.4, field_goals: 48.7, '3pt': 35.6, free_throws: 56.3, steals: 0.3, blocks: 0.2 },
        { image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4065836.png', name: 'Omari Spellman', jersey_number: '6', position: 'Power Forward', games_played: 46, rebounds: 4.2, pts: 5.9, ast: 1.0, field_goals: 40.2, '3pt': 34.4, free_throws: 71.1, steals: 0.6, blocks: 0.5 }
      ])
    })
}
