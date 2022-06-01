const input = document.querySelector('#input-bar')
const btnSearch = document.querySelector('#btn-search')
const form = document.querySelector('form')
const ip = document.querySelector('#ipAdd')
const loc = document.querySelector('#location')
const timezone = document.querySelector('#timezone')
const isp = document.querySelector('#isp')

// Map init

function generateMap(lat, long) {
  var container = L.DomUtil.get('map')
  if (container != null) {
    container._leaflet_id = null
  }

  let map = L.map('map', {
    zoomControl: true,
  })
  map.zoomControl.setPosition('bottomright')
  map.setView([lat, long], 13)

  L.tileLayer(
    'https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=beRWRYDxiANAsSeJMHyj',
    {
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    },
  ).addTo(map)

  let myIcon = L.icon({
    iconUrl: './images/icon-location.svg',
    iconAnchor: [lat, long],
  })

  let marker = L.marker([lat, long], { icon: myIcon }).addTo(map)
}

// Fetch Data

async function geoData(value) {
  const api = await fetch(
    `https://geo.ipify.org/api/v1?apiKey=at_Spd7wzq30CmA976PKtURtumtE3wK8&ipAddress=${value}`,
  )
  const details = await api.json()

  ip.innerHTML = `${details.ip}`
  loc.innerHTML = `${details.location.city}, ${details.location.country}`
  timezone.innerHTML = `${details.location.timezone}`
  isp.innerHTML = `${details.isp}`
  generateMap(details.location.lat, details.location.lng)
  console.log(details)
}

// Events

form.addEventListener('submit', (e) => {
  e.preventDefault()
  geoData(input.value)
  input.value = ''
})

btnSearch.addEventListener('click', geoData(input.value))
