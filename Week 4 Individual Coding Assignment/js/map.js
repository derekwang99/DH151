// Global variables
var map;
let lat = 0;
let lon = 0;
let zl = 3;
var path = "data/plastic_pollution.csv";
let markers = L.featureGroup();
let time2007 = ['2007'];
let time2008 = ['2008'];
let time2009 = ['2009'];
let time2010 = ['2010'];
let time2011 = ['2011'];
let time2012 = ['2012'];
let time2013 = ['2013'];

let clear =  ['Reset'];

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

// function to read csv data
function readCSV(path){
	Papa.parse(path, {
		header: true,
		download: true,
		complete: function(data) {
			console.log(data);
			
			// map the data
			mapCSV(data);

		}
	});
}
// Reset Map
clear.forEach(function(item){
	$('.sidebar').append(`<div class = "sidebar-item" onclick = "resetMap()"> Clear Map  </div>`)
});




function resetMap(){
	markers.clearLayers();
}



// 2007
time2007.forEach(function(item){
	$('.sidebar').append(`<div class = "sidebar-item" onclick = "filterData2007()"> ${item} </div>`)
	
});

function filterData2007() {
		path = "data/plastic_pollution_2007.csv";
		readCSV(path);
}


// 2008 
time2008.forEach(function(item){
	$('.sidebar').append(`<div class = "sidebar-item" onclick = "filterData(${item})"> ${item} </div>`)
});
	

	function filterData(item) {

	if (item = 2008 ) {
		path = "data/plastic_pollution_2008.csv";
		readCSV(path);
	}
}

// 2009
time2009.forEach(function(item){
	$('.sidebar').append(`<div class = "sidebar-item" onclick = "filterData2009()"> ${item} </div>`)
	
});

function filterData2009() {
		path = "data/plastic_pollution_2009.csv";
		readCSV(path);
}

// 2010
time2010.forEach(function(item){
	$('.sidebar').append(`<div class = "sidebar-item" onclick = "filterData2010()"> ${item} </div>`)
	
});

function filterData2010() {
		path = "data/plastic_pollution_2010.csv";
		readCSV(path);
}

// 2011
time2011.forEach(function(item){
	$('.sidebar').append(`<div class = "sidebar-item" onclick = "filterData2011()"> ${item} </div>`)
	
});

function filterData2011() {
		path = "data/plastic_pollution_2011.csv";
		readCSV(path);
}


// 2012
time2012.forEach(function(item){
	$('.sidebar').append(`<div class = "sidebar-item" onclick = "filterData2012()"> ${item} </div>`)
	
});

function filterData2012() {
		path = "data/plastic_pollution_2012.csv";
		readCSV(path);
}



// 2013
time2013.forEach(function(item){
	$('.sidebar').append(`<div class = "sidebar-item" onclick = "filterData2013()"> ${item} </div>`)
	
});

function filterData2013() {
		path = "data/plastic_pollution.csv";
		readCSV(path);
}


// old code
function mapCSV(data){

	// circle options
	let circleOptions = {
		radius: 5,
		weight: 1,
		color: 'white',
		fillColor: 'dodgerblue',
		fillOpacity: 1
	}

	// loop through each entry
	data.data.forEach(function(item,index){
		// create a marker
		let marker = L.circleMarker([item.latitude,item.longitude],circleOptions)

		// add marker to featuregroup
		markers.addLayer(marker)

		// add entry to sidebar
		//$('.sidebar').append(`<img src="${item.thumbnail_url}" onmouseover="panToImage(${index})">`)
	})

	// add featuregroup to map
	markers.addTo(map)

	// fit map to markers
	map.fitBounds(markers.getBounds())
}