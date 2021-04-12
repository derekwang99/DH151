
let data = [
	{
		'title': 'Taipei, Taiwan',
		'lat': 25.0330,
		'lon': 121.5654,
		'description': 'Went with my dad to Taiwan in 2019. He ended up leaving first because of work, but I stayed and explored Taipei by myself for a week.'
	},
	{
		'title': 'St. Petersburg, Russia',
		'lat': 59.9398,
		'lon': 130.3146,
		'description': 'Toured Europe when I was younger with my mom and brother. Ended up liking the State Hermitage Museum the most in Russia. '
	},
	{
		'title': 'Shanghai, China',
		'lat': 31.2304,
		'lon': 121.4737,
		'description': 'Went to vacation in China a long time ago. I remembered not liking it that much because I was always on alert since thieves are common. My mom ended up getting scammed (thankfully it was only $20).'
	},
	{
		'title': 'Taichung, Taiwan',
		'lat': 24.1477,
		'lon': 120.6736,
		'description':'Went with my mom to Taiwan to visit relatives. Taichung is her birthplace and she visited her childhood home. She ended up seeing her neighbor, of whom she had not talked to for around two decades.'
	},
	{
		'title': 'Singapore, Republic of Singapore',
		'lat': 1.3521,
		'lon': 103.8198,
		'description': 'Singapore was extremely fun to visit simple because of the food. Aside from Singaporean food, they had amazing Malaysian, Indian, and Chinese food. Singapore is such an interesting and diverse place! '
	},
	{
		'title': 'Tainan, Taiwan',
		'lat': 22.9997 ,
		'lon': 120.2270,
		'description':' Tainan is my dad\'s birthplace--I came here to attend my grandmother\'s funeral. As a result, I got to stay with my extended family and had lots of fun explaining American culture to them.'
	}
]
var map = L.map('map').setView([34.0697,-118.4432], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a feature group
let myMarkers = L.featureGroup();

// loop through data
data.forEach(function(item, index){
	let marker = L.marker([item.lat,item.lon])
	.bindPopup(item.title + ":</br> (" + item.lat + ", " + item.lon + ")</br>" + "</br>" + item.description)
	.openPopup();	

	myMarkers.addLayer(marker)

	$('.sidebar').append(`<div class = " sidebar-item" onclick = "flyToIndex(${index})">${item.title} </div>`)

});

myMarkers.addTo(map)

//define layers = 
let layers = {
	"My Markers": myMarkers
}

// add layer control box
L.control.layers(null, layers).addTo(map) // nulls reserved for base maps

// auto zoom to all markers for user to see all at once.
map.fitBounds(myMarkers.getBounds())

function flyToIndex(index){
	map.flyTo([data[index].lat, data[index].lon], 10)
	myMarkers.getLayers()[index].openPopup() // for having popup open up automatically when flying 
}

// 4.12 -- learn feature groups and template literal ($)