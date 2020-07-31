var heroes = [
	'Buffy the Vampire Slayer',
	'Captain America',
	'Percy Jackson',
	'Aang, the Last Airbender',
	'Harry Potter',
	'Hermione Granger',
	'Draco Malfoy',
	'Rey from Star Wars',
	'Ariana Grande',
	'Sonic the Hedgehog',
	'Mario and Luigi'

]

var villains = [
'Rasputin',
'Billie Eilish',
'the Paw Patrol dogs',
'Dora the Explorer',
]

var places = [
'a busy coffeeshop',
'a small New England town',
'a secret passageway'
]

function newHero() {
	var randomNumber = Math.floor(Math.random() * (heroes.length));
	document.getElementById('heroDisplay').innerHTML = heroes[randomNumber];
}

function newVillain() {
	var randomNumber2 = Math.floor(Math.random() * (villains.length));
	document.getElementById('villainDisplay').innerHTML = villains[randomNumber2];
}

function newPlace() {
	var randomNumber3 = Math.floor(Math.random() * (places.length));
	document.getElementById('placeDisplay').innerHTML = places[randomNumber3];
}

