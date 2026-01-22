export default function crash_team_racing_nitro_fueled() {
  const crash_team_racing_nitro_fueled = [
    "url('../games/crash_team_racing_nitro_fueled_bg1.jpg')",
    "url('../games/crash_team_racing_nitro_fueled_bg2.jpg')",
  ];

  const i = Math.floor(Math.random() * crash_team_racing_nitro_fueled.length);

  return crash_team_racing_nitro_fueled[i];
}
