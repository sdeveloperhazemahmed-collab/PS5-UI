export default function days_gone() {
  const days_gone = [
    "url('../games/days_gone_bg1.jpg')",
    "url('../games/days_gone_bg2.jpg')",
  ];

  const i = Math.floor(Math.random() * days_gone.length);

  return days_gone[i];
}
