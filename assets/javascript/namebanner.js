// Function to load character information from Local Storage if any exists
$(window).on('load', function () {

	//If statement to check if Local Storage has charcater info
	if (localStorage.charClass != null) {
		
		//Get info from local storage
		var name = localStorage.getItem('charName');
		var gender = localStorage.getItem('charGender');
		var race = localStorage.getItem('charRace');
		var classDisplay = localStorage.getItem('charClass');

		//Display info to html
		$('#characterName').text(name);
		$('#gender').text(gender);
		$('#race').text(race);
		$('#class').text(classDisplay);

		//Calls functions to generate image, stats and weapons/skills
		weaponsSpells();
		randomImage();
		stats();
	}
	
	else {

		//Generates name and creates dropdown for Gender, Race and Class
		generateName();
		$('#gender').text('Gender');
		$('#race').text('Race');
		$('#class').text('Class');
		editGenderRaceClass();
	}
});


// Random Name Function
function generateName() {

	// Random Name API, ajax GET and Then function
	var queryURL =
		'https://cors-anywhere.herokuapp.com/https://uzby.com/api.php?min=3&max=10';

	$.ajax({
		url: queryURL,
		method: 'GET',
	}).then(function (response) {
		console.log(response);
		$('#characterName').text(response);
		localStorage.setItem('charName', response);
	});
}

//Function to edit Character Name
function editName() {
	$('#characterName').attr('contenteditable', 'true');

	// If 1st Double Click, save button will be generated
	if (count === 0) {
		var saveButton = $('<button>');
		$(saveButton).text('Save');
		$(saveButton).attr('id', 'saveBtn');
		$(saveButton).attr('type', 'button');
		$(saveButton).addClass('button');
		$('#characterName').append(saveButton);
		count = count + 1;
	}

	// Save Buttton sets user typed name to name banner, Local Storage and resets count
	$('#saveBtn').click(function () {
		$('#characterName').attr('contenteditable', 'false');
		$('#saveBtn').remove();
		response = $('#characterName').text();
		localStorage.setItem('charName', response);
		count = 0;
	});
}

// Allows Character Name to be edited after double click
$('#characterName').dblclick(function () {
	editName();
});

// Allows user to edit Gender, Race and Class
function editGenderRaceClass() {

	//Dynamically creates dropdown
	$('#addDrop').attr('data-dropdown-menu', '');
	$('#removeGender').addClass('is-dropdown-submenu-parent opens-right');
	$('#removeRace').addClass('is-dropdown-submenu-parent opens-right');
	$('#removeClass').addClass('is-dropdown-submenu-parent opens-right');
	$('#genderUL').addClass('menu submenu is-dropdown-submenu first-sub vertical');
	$('#raceUL').addClass('menu submenu is-dropdown-submenu first-sub vertical');
	$('#classUL').addClass('menu submenu is-dropdown-submenu first-sub vertical');

	$(document).foundation();

	if (genderCount === 0) {
		// Creates Female List Item
		var femList = $('<li>');
		$(femList).attr('id', 'femList');
		$(femList).text('Female');
		$('#genderUL').append(femList);

		// Creates Male List Item
		var maleList = $('<li>');
		$(maleList).attr('id', 'maleList');
		$(maleList).text('Male');
		$('#genderUL').append(maleList);

		genderCount = genderCount + 1;
	}

	if (raceCount === 0) {
		// Creates Dwarf List Item
		var dwarfList = $('<li>');
		$(dwarfList).attr('id', 'dwarfList');
		$(dwarfList).text('Dwarf');
		$('#raceUL').append(dwarfList);

		// Creates Elf List Item
		var elfList = $('<li>');
		$(elfList).attr('id', 'elfList');
		$(elfList).text('Elf');
		$('#raceUL').append(elfList);

		// Creates Human List Item
		var humList = $('<li>');
		$(humList).attr('id', 'humList');
		$(humList).text('Human');
		$('#raceUL').append(humList);

		raceCount = raceCount + 1;
	}

	if (classCount === 0) {
		// Creates Cleric List Item
		var cleList = $('<li>');
		$(cleList).attr('id', 'cleList');
		$(cleList).text('Cleric');
		$('#classUL').append(cleList);

		// Creates Fighter List Item
		var figList = $('<li>');
		$(figList).attr('id', 'figList');
		$(figList).text('Fighter');
		$('#classUL').append(figList);

		// Creates Ranger List Item
		var ranList = $('<li>');
		$(ranList).attr('id', 'ranList');
		$(ranList).text('Ranger');
		$('#classUL').append(ranList);

		// Creates Rogue List Item
		var rogList = $('<li>');
		$(rogList).attr('id', 'rogList');
		$(rogList).text('Rogue');
		$('#classUL').append(rogList);

		// Creates Wizard List Item
		var wizList = $('<li>');
		$(wizList).attr('id', 'wizList');
		$(wizList).text('Wizard');
		$('#classUL').append(wizList);

		classCount = classCount + 1;
	}

	// Displays and sets 'Female' to localStorage on Click
	$('#femList').click(function () {
		var gender = 'Female';
		$('#gender').text(gender);
		localStorage.setItem('charGender', gender);
		$('#femList').remove();
		$('#maleList').remove();
		genderCount = 0;
		$('#addDrop').removeAttr('data-dropdown-menu', '');
		$(document).foundation();
		$('#removeGender').removeClass();
		$('#genderUL').removeClass();
		randomImage();
		stats();
		var race = localStorage.getItem('charRace');
		var classDisplay = localStorage.getItem('charClass');

		if (race !== null) {
			$('#dwarfList').remove();
			$('#elfList').remove();
			$('#humList').remove();
			raceCount = 0;
			$('#addDrop').removeAttr('data-dropdown-menu', '');
			$(document).foundation();
			$('#removeRace').removeClass();
			$('#raceUL').removeClass();
		}
		if (classDisplay !== null) {
			$('#cleList').remove();
			$('#figList').remove();
			$('#ranList').remove();
			$('#rogList').remove();
			$('#wizList').remove();
			classCount = 0;
			$('#addDrop').removeAttr('data-dropdown-menu', '');
			$(document).foundation();
			$('#removeClass').removeClass();
			$('#classUL').removeClass();
		}
	});

	// Displays and sets 'Male' to localStorage on Click
	$('#maleList').click(function () {
		var gender = 'Male';
		$('#gender').text(gender);
		localStorage.setItem('charGender', gender);
		$('#femList').remove();
		$('#maleList').remove();
		genderCount = 0;
		$('#addDrop').removeAttr('data-dropdown-menu', '');
		$(document).foundation();
		$('#removeGender').removeClass();
		$('#genderUL').removeClass();
		randomImage();
		stats();
		var race = localStorage.getItem('charRace');
		var classDisplay = localStorage.getItem('charClass');

		if (race !== null) {
			$('#dwarfList').remove();
			$('#elfList').remove();
			$('#humList').remove();
			raceCount = 0;
			$('#addDrop').removeAttr('data-dropdown-menu', '');
			$(document).foundation();
			$('#removeRace').removeClass();
			$('#raceUL').removeClass();
		}
		if (classDisplay !== null) {
			$('#cleList').remove();
			$('#figList').remove();
			$('#ranList').remove();
			$('#rogList').remove();
			$('#wizList').remove();
			classCount = 0;
			$('#addDrop').removeAttr('data-dropdown-menu', '');
			$(document).foundation();
			$('#removeClass').removeClass();
			$('#classUL').removeClass();
		}
	});

	// Displays and sets 'Dwarf' to localStorage on Click
	$('#dwarfList').click(function () {
		var race = 'Dwarf';
		$('#race').text(race);
		localStorage.setItem('charRace', race);
		$('#dwarfList').remove();
		$('#elfList').remove();
		$('#humList').remove();
		raceCount = 0;
		$('#addDrop').removeAttr('data-dropdown-menu', '');
		$(document).foundation();
		$('#removeRace').removeClass();
		$('#raceUL').removeClass();
		randomImage();
		stats();
		var gender = localStorage.getItem('charGender');
		var classDisplay = localStorage.getItem('charClass');

		if (gender !== null) {
			$('#femList').remove();
			$('#maleList').remove();
			genderCount = 0;
			$('#addDrop').removeAttr('data-dropdown-menu', '');
			$(document).foundation();
			$('#removeGender').removeClass();
			$('#genderUL').removeClass();
		}
		if (classDisplay !== null) {
			$('#cleList').remove();
			$('#figList').remove();
			$('#ranList').remove();
			$('#rogList').remove();
			$('#wizList').remove();
			classCount = 0;
			$('#addDrop').removeAttr('data-dropdown-menu', '');
			$(document).foundation();
			$('#removeClass').removeClass();
			$('#classUL').removeClass();
		}
	});

	// Displays and sets 'Elf' to localStorage on Click
	$('#elfList').click(function () {
		var race = 'Elf';
		$('#race').text(race);
		localStorage.setItem('charRace', race);
		$('#dwarfList').remove();
		$('#elfList').remove();
		$('#humList').remove();
		raceCount = 0;
		$('#addDrop').removeAttr('data-dropdown-menu', '');
		$(document).foundation();
		$('#removeRace').removeClass();
		$('#raceUL').removeClass();
		randomImage();
		stats();
		var gender = localStorage.getItem('charGender');
		var classDisplay = localStorage.getItem('charClass');

		if (gender !== null) {
			$('#femList').remove();
			$('#maleList').remove();
			genderCount = 0;
			$('#addDrop').removeAttr('data-dropdown-menu', '');
			$(document).foundation();
			$('#removeGender').removeClass();
			$('#genderUL').removeClass();
		}
		if (classDisplay !== null) {
			$('#cleList').remove();
			$('#figList').remove();
			$('#ranList').remove();
			$('#rogList').remove();
			$('#wizList').remove();
			classCount = 0;
			$('#addDrop').removeAttr('data-dropdown-menu', '');
			$(document).foundation();
			$('#removeClass').removeClass();
			$('#classUL').removeClass();
		}
	});

	// Displays and sets 'Human' to localStorage on Click
	$('#humList').click(function () {
		var race = 'Human';
		$('#race').text(race);
		localStorage.setItem('charRace', race);
		$('#dwarfList').remove();
		$('#elfList').remove();
		$('#humList').remove();
		raceCount = 0;
		$('#addDrop').removeAttr('data-dropdown-menu', '');
		$(document).foundation();
		$('#removeRace').removeClass();
		$('#raceUL').removeClass();
		randomImage();
		stats();
		var gender = localStorage.getItem('charGender');
		var classDisplay = localStorage.getItem('charClass');

		if (gender !== null) {
			$('#femList').remove();
			$('#maleList').remove();
			genderCount = 0;
			$('#addDrop').removeAttr('data-dropdown-menu', '');
			$(document).foundation();
			$('#removeGender').removeClass();
			$('#genderUL').removeClass();
		}
		if (classDisplay !== null) {
			$('#cleList').remove();
			$('#figList').remove();
			$('#ranList').remove();
			$('#rogList').remove();
			$('#wizList').remove();
			classCount = 0;
			$('#addDrop').removeAttr('data-dropdown-menu', '');
			$(document).foundation();
			$('#removeClass').removeClass();
			$('#classUL').removeClass();
		}
	});

	// Displays and sets 'Cleric' to localStorage on Click
	$('#cleList').click(function () {
		var classDisplay = 'Cleric';
		$('#class').text(classDisplay);
		localStorage.setItem('charClass', classDisplay);
		$('#cleList').remove();
		$('#figList').remove();
		$('#ranList').remove();
		$('#rogList').remove();
		$('#wizList').remove();
		classCount = 0;
		$('#addDrop').removeAttr('data-dropdown-menu', '');
		$(document).foundation();
		$('#removeClass').removeClass();
		$('#classUL').removeClass();
		randomImage();
		weaponsSpells();
		stats();
		var gender = localStorage.getItem('charGender');
		var race = localStorage.getItem('charRace');

		if (gender !== null) {
			$('#femList').remove();
			$('#maleList').remove();
			genderCount = 0;
			$('#addDrop').removeAttr('data-dropdown-menu', '');
			$(document).foundation();
			$('#removeGender').removeClass();
			$('#genderUL').removeClass();
		}
		if (race !== null) {
			$('#dwarfList').remove();
			$('#elfList').remove();
			$('#humList').remove();
			raceCount = 0;
			$('#addDrop').removeAttr('data-dropdown-menu', '');
			$(document).foundation();
			$('#removeRace').removeClass();
			$('#raceUL').removeClass();
		}
	});

	// Displays and sets 'Fighter' to localStorage on Click
	$('#figList').click(function () {
		var classDisplay = 'Fighter';
		$('#class').text(classDisplay);
		localStorage.setItem('charClass', classDisplay);
		$('#cleList').remove();
		$('#figList').remove();
		$('#ranList').remove();
		$('#rogList').remove();
		$('#wizList').remove();
		classCount = 0;
		$('#addDrop').removeAttr('data-dropdown-menu', '');
		$(document).foundation();
		$('#removeClass').removeClass();
		$('#classUL').removeClass();
		randomImage();
		weaponsSpells();
		stats();
		var gender = localStorage.getItem('charGender');
		var race = localStorage.getItem('charRace');

		if (gender !== null) {
			$('#femList').remove();
			$('#maleList').remove();
			genderCount = 0;
			$('#addDrop').removeAttr('data-dropdown-menu', '');
			$(document).foundation();
			$('#removeGender').removeClass();
			$('#genderUL').removeClass();
		}
		if (race !== null) {
			$('#dwarfList').remove();
			$('#elfList').remove();
			$('#humList').remove();
			raceCount = 0;
			$('#addDrop').removeAttr('data-dropdown-menu', '');
			$(document).foundation();
			$('#removeRace').removeClass();
			$('#raceUL').removeClass();
		}
	});

	// Displays and sets 'Ranger' to localStorage on Click
	$('#ranList').click(function () {
		var classDisplay = 'Ranger';
		$('#class').text(classDisplay);
		localStorage.setItem('charClass', classDisplay);
		$('#cleList').remove();
		$('#figList').remove();
		$('#ranList').remove();
		$('#rogList').remove();
		$('#wizList').remove();
		classCount = 0;
		$('#addDrop').removeAttr('data-dropdown-menu', '');
		$(document).foundation();
		$('#removeClass').removeClass();
		$('#classUL').removeClass();
		randomImage();
		weaponsSpells();
		stats();
		var gender = localStorage.getItem('charGender');
		var race = localStorage.getItem('charRace');
		if (gender !== null) {
			$('#femList').remove();
			$('#maleList').remove();
			genderCount = 0;
			$('#addDrop').removeAttr('data-dropdown-menu', '');
			$(document).foundation();
			$('#removeGender').removeClass();
			$('#genderUL').removeClass();
		}
		if (race !== null) {
			$('#dwarfList').remove();
			$('#elfList').remove();
			$('#humList').remove();
			raceCount = 0;
			$('#addDrop').removeAttr('data-dropdown-menu', '');
			$(document).foundation();
			$('#removeRace').removeClass();
			$('#raceUL').removeClass();
		}
	});

	// Displays and sets 'Rogue' to localStorage on Click
	$('#rogList').click(function () {
		var classDisplay = 'Rogue';
		$('#class').text(classDisplay);
		localStorage.setItem('charClass', classDisplay);
		$('#cleList').remove();
		$('#figList').remove();
		$('#ranList').remove();
		$('#rogList').remove();
		$('#wizList').remove();
		classCount = 0;
		$('#addDrop').removeAttr('data-dropdown-menu', '');
		$(document).foundation();
		$('#removeClass').removeClass();
		$('#classUL').removeClass();
		randomImage();
		weaponsSpells();
		stats();
		var gender = localStorage.getItem('charGender');
		var race = localStorage.getItem('charRace');
		if (gender !== null) {
			$('#femList').remove();
			$('#maleList').remove();
			genderCount = 0;
			$('#addDrop').removeAttr('data-dropdown-menu', '');
			$(document).foundation();
			$('#removeGender').removeClass();
			$('#genderUL').removeClass();
		}
		if (race !== null) {
			$('#dwarfList').remove();
			$('#elfList').remove();
			$('#humList').remove();
			raceCount = 0;
			$('#addDrop').removeAttr('data-dropdown-menu', '');
			$(document).foundation();
			$('#removeRace').removeClass();
			$('#raceUL').removeClass();
		}
	});

	// Displays and sets 'Wizard' to localStorage on Click
	$('#wizList').click(function () {
		var classDisplay = 'Wizard';
		$('#class').text(classDisplay);
		localStorage.setItem('charClass', classDisplay);
		$('#cleList').remove();
		$('#figList').remove();
		$('#ranList').remove();
		$('#rogList').remove();
		$('#wizList').remove();
		classCount = 0;
		$('#addDrop').removeAttr('data-dropdown-menu', '');
		$(document).foundation();
		$('#removeClass').removeClass();
		$('#classUL').removeClass();
		randomImage();
		weaponsSpells();
		stats();
		var gender = localStorage.getItem('charGender');
		var race = localStorage.getItem('charRace');
		if (gender !== null) {
			$('#femList').remove();
			$('#maleList').remove();
			genderCount = 0;
			$('#addDrop').removeAttr('data-dropdown-menu', '');
			$(document).foundation();
			$('#removeGender').removeClass();
			$('#genderUL').removeClass();
		}
		if (race !== null) {
			$('#dwarfList').remove();
			$('#elfList').remove();
			$('#humList').remove();
			raceCount = 0;
			$('#addDrop').removeAttr('data-dropdown-menu', '');
			$(document).foundation();
			$('#removeRace').removeClass();
			$('#raceUL').removeClass();
		}
	});
}

// Allows user to edit Gender, Race and Class after double click
$('#gender').dblclick(function () {
	editGenderRaceClass();
});

// Allows user to edit Gender, Race and Class after double click
$('#race').dblclick(function () {
	editGenderRaceClass();
});

// Allows user to edit Gender, Race and Class after double click
$('#class').dblclick(function () {
	editGenderRaceClass();
});