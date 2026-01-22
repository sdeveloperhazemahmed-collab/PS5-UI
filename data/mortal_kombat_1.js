export default function mortal_kombat_1() {
  const mortal_kombat_1 = [
    "url('../games/mortal_kombat_1_bg1.jpg')",
    "url('../games/mortal_kombat_1_bg2.jpg')",
    "url('../games/mortal_kombat_1_bg3.jpg')",
    "url('../games/mortal_kombat_1_bg4.jpg')",
    "url('../games/mortal_kombat_1_bg5.jpg')",
  ];

  const i = Math.floor(Math.random() * mortal_kombat_1.length);

  return mortal_kombat_1[i];
}
