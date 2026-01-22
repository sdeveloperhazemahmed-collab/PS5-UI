export default function battlefield_2042() {
  const battlefield_2042 = [
    "url('../games/battlefield_2042_bg1.jpg')",
    "url('../games/battlefield_2042_bg2.jpg')",
    "url('../games/battlefield_2042_bg3.jpg')",
    "url('../games/battlefield_2042_bg4.jpg')",
  ];

  const i = Math.floor(Math.random() * battlefield_2042.length);

  return battlefield_2042[i];
}
