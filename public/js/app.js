// Generate Map

const map = L.map("map").setView([0, 0], 2);
L.tileLayer(
  "https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=beRWRYDxiANAsSeJMHyj",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(map);

geo();

async function geo() {
  const api = await fetch(
    "https://geo.ipify.org/api/v1?apiKey=at_Spd7wzq30CmA976PKtURtumtE3wK8&ipAddress=112.203.167.194"
  );
  const details = await api.json();

  console.log(details);
}
