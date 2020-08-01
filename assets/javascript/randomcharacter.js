$(document).foundation();
$('#Modal1').foundation('open');

// Generates a random number
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

//Click event when the user picks random
$('#toRandom').click(function () {
	event.preventDefault();

	// Picks a gender
	var genderNum = getRandomInt(2);
	if (genderNum === 0) {
		playerSelection[0] = 'Male';
	} else {
		playerSelection[0] = 'Female';
	}

	// Picks a race
	var raceNum = getRandomInt(3);
	if (raceNum === 0) {
		playerSelection[1] = 'Dwarf';
	} else if (raceNum === 1) {
		playerSelection[1] = 'Elf';
	} else {
		playerSelection[1] = 'Human';
	}

	// Picks a class
	var classNum = getRandomInt(5);
	if (classNum === 0) {
		playerSelection[4] = 'Cleric';
	} else if (classNum === 1) {
		playerSelection[4] = 'Fighter';
	} else if (classNum === 2) {
		playerSelection[4] = 'Rogue';
	} else if (classNum === 3) {
		playerSelection[4] = 'Ranger';
	} else if (classNum === 4) {
		playerSelection[4] = 'Wizard';
    }
    
    //Saves to localStorage
	saveToLocal(playerSelection);
	
	// Calls the image, weapon and stats to be generated
		generateName();
        randomImage();
        weaponsSpells();
		stats();

    // close modal1
		$('#Modal1').foundation('close');
		
});