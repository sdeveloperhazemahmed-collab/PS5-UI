export default function uncharted_4() {
  const uncharted_4 = [
    "url('../games/uncharted_4_bg1.jpg')",
    "url('../games/uncharted_4_bg2.jpg')",
  ];

  const i = Math.floor(Math.random() * uncharted_4.length);

  return uncharted_4[i];
}
