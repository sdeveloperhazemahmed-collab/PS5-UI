export default function rocket_league() {
  const rocket_league = [
    "url('../games/rocket_league_bg1.jpg')",
    "url('../games/rocket_league_bg2.jpg')",
  ];

  const i = Math.floor(Math.random() * rocket_league.length);

  return rocket_league[i];
}
