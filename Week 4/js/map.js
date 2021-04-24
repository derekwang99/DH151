// Global variables
let map;
let lat = 0;
let lon = 0;
let zl = 3;

// global variables -- need to be in global space because we want to use these markers globally
let markers = L.featureGroup();

// path to csv data
let path = "data/dunitz.csv";

// initialize
$( document ).ready(function() {
	createMap(lat,lon,zl);
    readCSV(path);
});

// create the map
function createMap(lat,lon,zl){
	map = L.map('map').setView([lat,lon], zl);

	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
}

// function to read csv data--is being fed a path (global variable)
function readCSV(path){
	Papa.parse(path, {
		header: true, // does your data have header?
		download: true, // wait until __ before you do anything
		complete: function(data) { //do something w the data
			console.log(data); // to see data ?
			
			// map the data
			mapCSV(data);

		}
	});
}

// initialize
$( document ).ready(function() {
	createMap(lat,lon,zl);
	readCSV(path);
});

function mapCSV(data){
    
    let circleOptions = {
        radius: 5,
        weight: 1,
        color : 'white',
        fillColor: 'dodgerblue',
        fillOpacity: 1, // no opacity
    }

// loop through each entry
data.data.forEach(function(item, index){

    // create marker
    let marker = L.circleMarker([item.latitude,item.longitude], circleOptions).on('mouseover',function(){
			this.bindPopup(`${item.title}<br><img src="${item.thumbnail_url}">`).openPopup()})
    
    //add marker to feature group
    markers.addLayer(marker) 
})

markers.addTo(map); //add markers to map

map.fitBounds(markers.getBounds())


}
