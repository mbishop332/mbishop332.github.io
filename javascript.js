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
	'Mario and Luigi',
	'Simba from the Lion King',
	'Cinderella',
	'Bella Swan from Twilight',


]

var villains = [
'Rasputin, the mystic who advised the last czar of Russia',
'Billie Eilish',
'the Paw Patrol dogs',
'Dora the Explorer',
'Draco Malfoy',
'Kylo Ren from Star Wars',
'Edward Cullen from Twilight',
'Benjamin Franklin, 18th century inventor and Founding Father of the United States',
'Alexander Hamilton, 18th century economist and Founding Father of the United States',
'Iron Man',



]

var places = [
'a busy coffeeshop',
'a small New England town',
'a secret passageway',
'Toledo, Ohio',
'a school for witchcraft and wizardry',
'a car on a road trip',
'a city bus',
'the middle of a desert',
'a pirate ship',
'the International Space Station',
'the Moon',
'a galaxy far, far away',
'18th century Virginia',
'the middle of the woods',
'outside during a snowstorm',
'a haunted house',
'an Escape Room at the mall',
'a high school football game',
'a grocery store',
'an animal shelter',
'on an Alaskan dogsled race',
'a cruise ship',
'a mysterious cottage',
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

