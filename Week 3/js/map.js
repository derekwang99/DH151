
let data = [
	{
		'title': 'Taipei, Taiwan',
		'lat': 25.0330,
		'lon': 121.5654,
		'description': 'Went with my dad to Taiwan in 2019. He ended up leaving first because of work, but I stayed and explored Taipei by myself for a week.',
		'image': "https://tnimage.s3.hicloud.net.tw/photos/2019/12/04/1575436835-5de7422337a7a.jpg"
	},
	{
		'title': 'St. Petersburg, Russia',
		'lat': 59.9398,
		'lon': 130.3146,
		'description': 'Toured Europe when I was younger with my mom and brother. Ended up liking the State Hermitage Museum the most in Russia. ',
		'image': 'https://cdni.rbth.com/rbthmedia/images/web/en-rbth/images/2014-11/top/B509YD_top.jpg'
	},
	{
		'title': 'Shanghai, China',
		'lat': 31.2304,
		'lon': 121.4737,
		'description': 'Went to vacation in China a long time ago. I remembered not liking it that much because I was always on alert since thieves are common. My mom ended up getting scammed (thankfully it was only $20).',
		'image' : 'data:image/jpeg;base64,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'
	},
	{
		'title': 'Taichung, Taiwan',
		'lat': 24.1477,
		'lon': 120.6736,
		'description':'Went with my mom to Taiwan to visit relatives. Taichung is her birthplace and she visited her childhood home. She ended up seeing her neighbor, of whom she had not talked to for around two decades.',
		'image': 'https://www.cktravels.com/wp-content/uploads/2019/05/IMG_5548.jpg'
	},
	{
		'title': 'Singapore, Republic of Singapore',
		'lat': 1.3521,
		'lon': 103.8198,
		'description': 'Singapore was extremely fun to visit simple because of the food. Aside from Singaporean food, they had amazing Malaysian, Indian, and Chinese food. Singapore is such an interesting and diverse place! ',
		'image' : 'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_1100,c_fill,g_auto,h_619,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191212182124-04-singapore-buildings.jpg'
	},
	{
		'title': 'Tainan, Taiwan',
		'lat': 22.9997 ,
		'lon': 120.2270,
		'description':' Tainan is my dad\'s birthplace--I came here to attend my grandmother\'s funeral. As a result, I got to stay with my extended family and had lots of fun explaining American culture to them.',
		'image': 'https://asianwanderlust.com/wp-content/uploads/2019/01/Things-To-Do-in-Tainan-Taiwan-7-%E2%80%93-Fo-Guang-Shan-Buddha-Museum-2.jpg'
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
	.bindPopup("<center><h3>" + item.title + "</h3></center>" + 
		"<h4>" + "<center> <img src= ' " + item.image + "'width = 100%'/></center>" +
		 "<p>" + item.description + "</p>")

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