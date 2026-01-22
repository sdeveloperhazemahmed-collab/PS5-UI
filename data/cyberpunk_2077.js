export default function cyberpunk2077() {
  const cyberpunk2077 = [
    "url('../games/cyberpunk_2077_bg1.jpg')",
    "url('../games/cyberpunk_2077_bg2.jpg')",
  ];

  const i = Math.floor(Math.random() * cyberpunk2077.length);

  return cyberpunk2077[i];
}
