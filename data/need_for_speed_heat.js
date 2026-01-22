export default function need_for_speed_heat() {
  const need_for_speed_heat = [
    "url('../games/need_for_speed_heat_bg1.jpg')",
    "url('../games/need_for_speed_heat_bg2.jpg')",
    "url('../games/need_for_speed_heat_bg3.jpg')",
    "url('../games/need_for_speed_heat_bg4.jpg')",
    "url('../games/need_for_speed_heat_bg5.jpg')",
  ];

  const i = Math.floor(Math.random() * need_for_speed_heat.length);

  return need_for_speed_heat[i];
}
