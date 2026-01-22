export default function mafia_iii() {
  const mafia_iii = [
    "url('../games/mafia_iii_bg1.jpg')",
    "url('../games/mafia_iii_bg2.jpg')",
  ];

  const i = Math.floor(Math.random() * mafia_iii.length);

  return mafia_iii[i];
}
