export default function fifa_25() {
  const fifa_25 = [
    "url('../games/fifa_25_bg1.jpg')",
    "url('../games/fifa_25_bg2.jpg')",
  ];

  const i = Math.floor(Math.random() * fifa_25.length);

  return fifa_25[i];
}
