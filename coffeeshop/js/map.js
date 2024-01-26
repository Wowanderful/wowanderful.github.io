const mapBlock = document.querySelector('.map-image');
mapBlock.classList.remove('map-image--nojs');

var mapOptions = {
  center: [45.5055,-122.6782],
  zoom: 16
}

var iconOptions = {
  iconUrl: '../../img/Map-pin.svg',
  iconSize: [38, 50]
}

var map = L.map('map', mapOptions);

var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

map.addLayer(layer);


var customIcon = L.icon(iconOptions)

var markerOptions = {
  title: "MyLocation",
  clickable: true,
  draggable: true,
  icon: customIcon
}

var marker = L.marker([59.9684, 30.31781], markerOptions)

marker.addTo(map);
