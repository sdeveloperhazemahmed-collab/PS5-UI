export default function the_evil_within_2() {
  const the_evil_within_2 = [
    "url('../games/the_evil_within_2_bg1.jpg')",
    "url('../games/the_evil_within_2_bg2.jpg')",
  ];

  const i = Math.floor(Math.random() * the_evil_within_2.length);

  return the_evil_within_2[i];
}
