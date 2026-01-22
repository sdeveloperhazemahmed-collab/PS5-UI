export default function watch_dogs_legion() {
  const watch_dogs_legion = [
    "url('../games/watch_dogs_legion_bg1.jpg')",
    "url('../games/watch_dogs_legion_bg2.jpg')",
  ];

  const i = Math.floor(Math.random() * watch_dogs_legion.length);

  return watch_dogs_legion[i];
}
