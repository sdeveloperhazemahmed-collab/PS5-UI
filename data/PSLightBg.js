export default function PSLightBg() {
  const PSLightBg = [
    "url('PS5_bg4.jpg')",
    "url('PS5_bg5.jpg')",
    "url('PS5_bg6.jpg')",
  ];

  const i = Math.floor(Math.random() * PSLightBg.length);

  return PSLightBg[i];
}
