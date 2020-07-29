$(document).ready(function () {
	$(document).foundation();
	$('#Modal1').foundation('open');




	// Will's stuff!

// arrays with images
var mhf = ["images-male/human-fighter-1.jpg", "images-male/human-fighter-2.jpg", "images-male/human-fighter-3.jpg"];
var mhra = ["images-male/human-ranger-1.jpg", "images-male/human-ranger-2.jpg", "images-male/human-ranger-3.jpg"];
var mhm = ["images-male/human-mage-1.jpg", "images-male/human-mage-2.jpg", "images-male/human-mage-3.jpg"];
var mhc = ["images-male/human-cleric-1.jpg", "images-male/human-cleric-2.jpg", "images-male/human-cleric-3.jpg"];
var mhro = ["images-male/human-rogue-1.jpg", "images-male/human-rogue-2.jpg", "images-male/human-rogue-3.jpg"];
var fhf = ["images-female/human-fighter-1.jpg", "images-female/human-fighter-2.jpg", "images-female/human-fighter-3.jpg"];
var fhra = ["images-female/human-ranger-1.jpg", "images-female/human-ranger-2.jpg", "images-female/human-ranger-3.jpg"];
var fhm = ["images-female/human-mage-1.jpg", "images-female/human-mage-2.jpg", "images-female/human-mage-3.jpg"];
var fhc = ["images-female/human-cleric-1.jpg", "images-female/human-cleric-2.jpg", "images-female/human-cleric-3.jpg"];
var fhro = ["images-female/human-rogue-1.jpg", "images-female/human-rogue-2.jpg", "images-female/human-rogue-3.jpg"];
var mef = ["images-male/elf-fighter-1.jpg", "images-male/elf-fighter-2.jpg", "images-male/elf-fighter-3.jpg"];
var fef = ["images-female/elf-fighter-1.jpg", "images-female/elf-fighter-2.jpg", "images-female/elf-fighter-3.jpg"];
var mera = ["images-male/elf-ranger-1.jpg", "images-male/elf-ranger-2.jpg", "images-male/elf-ranger-3.jpg"];
var fera = ["images-female/elf-ranger-1.jpg", "images-female/elf-ranger-2.jpg", "images-female/elf-ranger-3.jpg"];
var mem = ["images-male/elf-mage-1.jpg", "images-male/elf-mage-2.jpg", "images-male/elf-mage-3.jpg"];
var fem = ["images-female/elf-mage-1.jpg", "images-female/elf-mage-2.jpg", "images-female/elf-mage-3.jpg"];
var mec = ["images-male/elf-cleric-1.jpg", "images-male/elf-cleric-2.jpg", "images-male/elf-cleric-3.jpg"];
var fec = ["images-female/elf-cleric-1.jpg", "images-female/elf-cleric-2.jpg", "images-female/elf-cleric-3.jpg"];
var mero = ["images-male/elf-rogue-1.jpg", "images-male/elf-rogue-2.jpg", "images-male/elf-rogue-3.jpg"];
var fero = ["images-female/elf-rogue-1.jpg", "images-female/elf-rogue-2.jpg", "images-female/elf-rogue-3.jpg"];
var mdf = ["images-male/dwarf-fighter-1.jpg", "images-male/dwarf-fighter-2.jpg", "images-male/dwarf-fighter-3.jpg"];
var fdf = ["images-female/dwarf-fighter-1.jpg", "images-female/dwarf-fighter-2.jpg", "images-female/dwarf-fighter-3.jpg"];
var mdra = ["images-male/dwarf-ranger-1.jpg", "images-male/dwarf-ranger-2.jpg", "images-male/dwarf-ranger-3.jpg"];
var fdra = ["images-female/dwarf-ranger-1.jpg", "images-female/dwarf-ranger-2.jpg", "images-female/dwarf-ranger-3.jpg"];
var mdm = ["images-male/dwarf-mage-1.jpg", "images-male/dwarf-mage-2.jpg", "images-male/dwarf-mage-3.jpg"];
var fdm = ["images-female/dwarf-mage-1.jpg", "images-female/dwarf-mage-2.jpg", "images-female/dwarf-mage-3.jpg"];
var mdc = ["images-male/dwarf-cleric-1.jpg", "images-male/dwarf-cleric-2.jpg", "images-male/dwarf-cleric-3.jpg"];
var fdc = ["images-female/dwarf-cleric-1.jpg", "images-female/dwarf-cleric-2.jpg", "images-female/dwarf-cleric-3.jpg"];
var mdro = ["images-male/dwarf-rogue-1.jpg", "images-male/dwarf-rogue-2.jpg", "images-male/dwarf-rogue-3.jpg"];
var fdro = ["images-female/dwarf-rogue-1.jpg", "images-female/dwarf-rogue-2.jpg", "images-female/dwarf-rogue-3.jpg"];

// sets the image equal to the ID in the html
var result = document.getElementById("centerVidImg");

// searches a random number and is called in each if then statement
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

// generates a random character image based on gender, race, class.
function randomImage() {

	// plugs in to the local storage
	var gender = localStorage.getItem("charGender");
	var race = localStorage.getItem("charRace");
	var classDisplay = localStorage.getItem("charClass");
	// display which plugs into var results
	var currentpicture;

	// human if then statements "Male"
	if (gender === "Male" && race === "Human" && classDisplay === "Fighter") {
		currentpicture = mhf[randomNumber(0,mhf.length)];
		result.src = currentpicture;
	} else if (gender === "Male" && race === "Human" && classDisplay === "Ranger") {
		currentpicture = mhra[randomNumber(0,mhra.length)];
		result.src = currentpicture;
	} else if (gender === "Male" && race === "Human" && classDisplay === "Wizard") {
		currentpicture = mhm[randomNumber(0,mhra.length)];
		result.src = currentpicture;
	} else if (gender === "Male" && race === "Human" && classDisplay === "Cleric") {
		currentpicture = mhc[randomNumber(0,mhra.length)];
		result.src = currentpicture;
	} else if (gender === "Male" && race === "Human" && classDisplay === "Rogue") {
		currentpicture = mhro[randomNumber(0,mhra.length)];
		result.src = currentpicture;

	// human if then statements "Female"
	} else if (gender === "Female" && race === "Human" && classDisplay === "Fighter") {
		currentpicture = fhf[randomNumber(0,fhf.length)];
		result.src = currentpicture;
	} else if (gender === "Female" && race === "Human" && classDisplay === "Ranger") {
		currentpicture = fhra[randomNumber(0,fhra.length)];
		result.src = currentpicture;
	} else if (gender === "Female" && race === "Human" && classDisplay === "Wizard") {
		currentpicture = fhm[randomNumber(0,fhm.length)];
		result.src = currentpicture;
	} else if (gender === "Female" && race === "Human" && classDisplay === "Cleric") {
		currentpicture = fhc[randomNumber(0,fhc.length)];
		result.src = currentpicture;
	} else if (gender === "Female" && race === "Human" && classDisplay === "Rogue") {
		currentpicture = fhro[randomNumber(0,fhro.length)];
		result.src = currentpicture;

	// elf if then statements "Male"
	} else if (gender === "Male" && race === "Elf" && classDisplay === "Fighter") {
		currentpicture = mef[randomNumber(0,mef.length)];
		result.src = currentpicture;
	} else if (gender === "Male" && race === "Elf" && classDisplay === "Ranger") {
		currentpicture = mera[randomNumber(0,mera.length)];
		result.src = currentpicture;
	} else if (gender === "Male" && race === "Elf" && classDisplay === "Wizard") {
		currentpicture = mem[randomNumber(0,mera.length)];
		result.src = currentpicture;
	} else if (gender === "Male" && race === "Elf" && classDisplay === "Cleric") {
		currentpicture = mec[randomNumber(0,mera.length)];
		result.src = currentpicture;
	} else if (gender === "Male" && race === "Elf" && classDisplay === "Rogue") {
		currentpicture = mero[randomNumber(0,mera.length)];
		result.src = currentpicture;

	// elf if then statements "Female"
	} else if (gender === "Female" && race === "Elf" && classDisplay === "Fighter") {
		currentpicture = fef[randomNumber(0,fef.length)];
		result.src = currentpicture;
	} else if (gender === "Female" && race === "Elf" && classDisplay === "Ranger") {
		currentpicture = fera[randomNumber(0,fera.length)];
		result.src = currentpicture;
	} else if (gender === "Female" && race === "Elf" && classDisplay === "Wizard") {
		currentpicture = fem[randomNumber(0,fem.length)];
		result.src = currentpicture;
	} else if (gender === "Female" && race === "Elf" && classDisplay === "Cleric") {
		currentpicture = fec[randomNumber(0,fec.length)];
		result.src = currentpicture;
	} else if (gender === "Female" && race === "Elf" && classDisplay === "Rogue") {
		currentpicture = fero[randomNumber(0,fero.length)];
		result.src = currentpicture;

	// dwarf if then statements "Male"
	} else if (gender === "Male" && race === "Dwarf" && classDisplay === "Fighter") {
		currentpicture = mdf[randomNumber(0,mdf.length)];
		result.src = currentpicture;
	} else if (gender === "Male" && race === "Dwarf" && classDisplay === "Ranger") {
		currentpicture = mdra[randomNumber(0,mdra.length)];
		result.src = currentpicture;
	} else if (gender === "Male" && race === "Dwarf" && classDisplay === "Wizard") {
		currentpicture = mdm[randomNumber(0,mdra.length)];
		result.src = currentpicture;
	} else if (gender === "Male" && race === "Dwarf" && classDisplay === "Cleric") {
		currentpicture = mdc[randomNumber(0,mdra.length)];
		result.src = currentpicture;
	} else if (gender === "Male" && race === "Dwarf" && classDisplay === "Rogue") {
		currentpicture = mdro[randomNumber(0,mdra.length)];
		result.src = currentpicture;

	// dwarf if then statements "Female"
	} else if (gender === "Female" && race === "Dwarf" && classDisplay === "Fighter") {
		currentpicture = fdf[randomNumber(0,fdf.length)];
		result.src = currentpicture;
	} else if (gender === "Female" && race === "Dwarf" && classDisplay === "Ranger") {
		currentpicture = fdra[randomNumber(0,fdra.length)];
		result.src = currentpicture;
	} else if (gender === "Female" && race === "Dwarf" && classDisplay === "Wizard") {
		currentpicture = fdm[randomNumber(0,fdm.length)];
		result.src = currentpicture;
	} else if (gender === "Female" && race === "Dwarf" && classDisplay === "Cleric") {
		currentpicture = fdc[randomNumber(0,fdc.length)];
		result.src = currentpicture;
	} else if (gender === "Female" && race === "Dwarf" && classDisplay === "Rogue") {
		currentpicture = fdro[randomNumber(0,fdro.length)];
		result.src = currentpicture;
	}

	//updates the src.URL to equal the image
	$(".centerBioRight img").attr("src",result.src);
};


	// generate a random number function
	function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
	}

	// when the user pick random
	$('#toRandom').click(function () {
		event.preventDefault();

		// pick the gender
		var genderNum = getRandomInt(1);
		if (genderNum === 0) {
			playerSelection[0] = 'Male';
		} else {
			playerSelection[0] = 'Female';
		}

		// pick a race
		var raceNum = getRandomInt(2);
		if (raceNum === 0) {
			playerSelection[1] = 'Dwarf';
		} else if (raceNum === 1) {
			playerSelection[1] = 'Elf';
		} else {
			playerSelection[1] = 'Human';
		}

		// pick a class
		var classNum = getRandomInt(4);
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
		console.log(playerSelection);
		saveToLocal(playerSelection);

		// calls the image to be generated at this point
		randomImage();

		// close modal1
		$('#Modal1').foundation('close');
	});

	// 1. gender modal
	$('#toModal2').click(function () {
		event.preventDefault();

		// create a div for the modal
		var modal2 = $('<div>');
		// add class and ID for modal1
		$(modal2).addClass('reveal revealStyle');
		$(modal2).attr('id', 'Modal2');
		$(modal2).attr('data-reveal', '');
		// append the modal1 div to mainbody
		$('#mainBody').append(modal2);

		// create a h1 for the div
		var modal2h1 = $('<h1>');
		// add text for the h1 tag
		$(modal2h1).text('Step 1 : Choose a Gender');
		// append the modal1h1 to the div
		$(modal2).append(modal2h1);

		// create a button tag for the answers
		var modal2b1 = $('<button>');
		// add the class and ID for the button
		$(modal2b1).addClass('button toModal3');
		$(modal2b1).attr('id', 'maleBtn');
		// add the data value for the button
		$(modal2b1).attr('dataValue', 'Male');
		// add value for the button
		$(modal2b1).text('Male');
		// append the button to the div
		$(modal2).append(modal2b1);

		// create a button tag for the answers
		var modal2b2 = $('<button>');
		// add the class and ID for the button
		$(modal2b2).addClass('button toModal3');
		$(modal2b2).attr('id', 'femaleBtn');
		// add the data value for the button
		$(modal2b2).attr('dataValue', 'Female');
		// add value for the button
		$(modal2b2).text('Female');
		// append the button to the div
		$(modal2).append(modal2b2);

		// create a button tag for the close button
		var modal2b3 = $('<button>');
		// add the class and attr for the button
		$(modal2b3).addClass('close-button');
		$(modal2b3).attr('data-close', '');
		$(modal2b3).attr('aria-label', 'Close reveal');
		$(modal2b3).attr('type', 'button');
		// add the span for the close button
		$(modal2b3).html('<span aria-hidden="true">&times;</span>');
		// append the button to the div
		$(modal2).append(modal2b3);

		// close modal1
		$('#Modal1').foundation('close');
		// reload the foundation and open the modal2
		$(document).foundation();
		$('#Modal2').foundation('open');
	});

	$('#closeM1').click(function () {
		event.preventDefault();

		// close modal1
		$('#Modal1').foundation('close');
	});

	// 2. Races modal
	$(document).on('click', '.toModal3', function () {
		event.preventDefault();
		gender = $(this).attr('dataValue');
		playerSelection.push(gender);

		// create a div for the modal3
		var modal3 = $('<div>');
		// add class and ID for modal3
		$(modal3).addClass('reveal revealStyle');
		$(modal3).attr('id', 'Modal3');
		$(modal3).attr('data-reveal', '');
		// append the modal1 div to mainbody
		$('#mainBody').append(modal3);

		// create a h1 for the div
		var modal3h1 = $('<h1>');
		// add text for the h1 tag
		$(modal3h1).text('Step 2 : Select a race');
		// append the modal1h1 to the div
		$(modal3).append(modal3h1);

		// create a p tag for the div
		var modal3p1 = $('<p>');
		// add class and ID for modal3
		$(modal3p1).addClass('lead');
		// add text for the h1 tag
		$(modal3p1).text('Select one of the following options');
		// append the modal1h1 to the div
		$(modal3).append(modal3p1);

		// create a button tag for the answers
		var modal3b1 = $('<button>');
		// add the class and ID for the button
		$(modal3b1).addClass('button toModal4');
		// add the data value for the button
		$(modal3b1).attr('dataValue', 'Dwarf');
		// add value for the button
		$(modal3b1).text('Dwarf');
		// append the button to the div
		$(modal3).append(modal3b1);

		// create a button tag for the answers
		var modal3b2 = $('<button>');
		// add the class and ID for the button
		$(modal3b2).addClass('button toModal4');
		// add the data value for the button
		$(modal3b2).attr('dataValue', 'Elf');
		// add value for the button
		$(modal3b2).text('Elf');
		// append the button to the div
		$(modal3).append(modal3b2);

		// create a button tag for the answers
		var modal3b3 = $('<button>');
		// add the class and ID for the button
		$(modal3b3).addClass('button toModal4');
		// add the data value for the button
		$(modal3b3).attr('dataValue', 'Human');
		// add value for the button
		$(modal3b3).text('Human');
		// append the button to the div
		$(modal3).append(modal3b3);

		// create a button tag for the close button
		var modal3b4 = $('<button>');
		// add the class and attr for the button
		$(modal3b4).addClass('close-button');
		$(modal3b4).attr('data-close', '');
		$(modal3b4).attr('aria-label', 'Close reveal');
		$(modal3b4).attr('type', 'button');
		// add the span for the close button
		$(modal3b4).html('<span aria-hidden="true">&times;</span>');
		// append the button to the div
		$(modal3).append(modal3b4);

		// close modal2
		$('#Modal2').foundation('close');
		// reload the foundation and open the modal3
		$(document).foundation();
		$('#Modal3').foundation('open');
	});

	// 3. Attrack Distance modal
	$(document).on('click', '.toModal4', function () {
		event.preventDefault();
		race = $(this).attr('dataValue');
		playerSelection.push(race);

		// create a div for the modal4
		var modal4 = $('<div>');
		// add class and ID for modal4
		$(modal4).addClass('reveal revealStyle');
		$(modal4).attr('id', 'Modal4');
		$(modal4).attr('data-reveal', '');
		// append the modal1 div to mainbody
		$('#mainBody').append(modal4);

		// create a h1 for the div
		var modal4h1 = $('<h1>');
		// add text for the h1 tag
		$(modal4h1).text('Step 3 : Pick the attack distance');
		// append the modal1h1 to the div
		$(modal4).append(modal4h1);

		// create a p tag for the div
		var modal4p1 = $('<p>');
		// add class and ID for modal3
		$(modal4p1).addClass('lead');
		// add text for the h1 tag
		$(modal4p1).text('Do you want to attack from up close, or from afar?');
		// append the modal4h1 to the div
		$(modal4).append(modal4p1);

		// create a button tag for the answers
		var modal4b1 = $('<button>');
		// add the class and ID for the button
		$(modal4b1).addClass('button toModal5');
		// add the data value for the button
		$(modal4b1).attr('dataValue', 'Close');
		// add value for the button
		$(modal4b1).text('Close');
		// append the button to the div
		$(modal4).append(modal4b1);

		// create a button tag for the answers
		var modal4b2 = $('<button>');
		// add the class and ID for the button
		$(modal4b2).addClass('button toModal5');
		// add the data value for the button
		$(modal4b2).attr('dataValue', 'Far');
		// add value for the button
		$(modal4b2).text('Far');
		// append the button to the div
		$(modal4).append(modal4b2);

		// create a button tag for the answers
		var modal4b3 = $('<button>');
		// add the class and ID for the button
		$(modal4b3).addClass('button toModal5');
		// add the data value for the button
		$(modal4b3).attr('dataValue', 'Either');
		// add value for the button
		$(modal4b3).text('Either');
		// append the button to the div
		$(modal4).append(modal4b3);

		// create a button tag for the close button
		var modal4b4 = $('<button>');
		// add the class and attr for the button
		$(modal4b4).addClass('close-button');
		$(modal4b4).attr('data-close', '');
		$(modal4b4).attr('aria-label', 'Close reveal');
		$(modal4b4).attr('type', 'button');
		// add the span for the close button
		$(modal4b4).html('<span aria-hidden="true">&times;</span>');
		// append the button to the div
		$(modal4).append(modal4b4);

		// close modal3
		$('#Modal3').foundation('close');
		// reload the foundation and open the modal4
		$(document).foundation();
		$('#Modal4').foundation('open');
	});

	// 4. Weapons or Spells modal
	$(document).on('click', '.toModal5', function () {
		event.preventDefault();
		attackMode = $(this).attr('dataValue');
		playerSelection.push(attackMode);

		// create a div for the modal5
		var modal5 = $('<div>');
		// add class and ID for modal5
		$(modal5).addClass('reveal revealStyle');
		$(modal5).attr('id', 'Modal5');
		$(modal5).attr('data-reveal', '');
		// append the modal5 div to mainbody
		$('#mainBody').append(modal5);

		// create a h1 for the div
		var modal5h1 = $('<h1>');
		// add text for the h1 tag
		$(modal5h1).text('Step 4 : Weapons or Spells');
		// append the modal5h1 to the div
		$(modal5).append(modal5h1);

		// create a p tag for the div
		var modal5p1 = $('<p>');
		// add class and ID for modal5
		$(modal5p1).addClass('lead');
		// add text for the h1 tag
		$(modal5p1).text('Do you prefer weapons or spells?');
		// append the modal5h1 to the div
		$(modal5).append(modal5p1);

		// create a button tag for the answers
		var modal5b1 = $('<button>');
		// add the class and ID for the button
		$(modal5b1).addClass('button toModal6');
		// add the data value for the button
		$(modal5b1).attr('dataValue', 'Weapons');
		// add value for the button
		$(modal5b1).text('Weapons');
		// append the button to the div
		$(modal5).append(modal5b1);

		// create a button tag for the answers
		var modal5b2 = $('<button>');
		// add the class and ID for the button
		$(modal5b2).addClass('button toModal6');
		// add the data value for the button
		$(modal5b2).attr('dataValue', 'Spells');
		// add value for the button
		$(modal5b2).text('Spells');
		// append the button to the div
		$(modal5).append(modal5b2);

		// create a button tag for the close button
		var modal5b3 = $('<button>');
		// add the class and attr for the button
		$(modal5b3).addClass('close-button');
		$(modal5b3).attr('data-close', '');
		$(modal5b3).attr('aria-label', 'Close reveal');
		$(modal5b3).attr('type', 'button');
		// add the span for the close button
		$(modal5b3).html('<span aria-hidden="true">&times;</span>');
		// append the button to the div
		$(modal5).append(modal5b3);

		// close modal4
		$('#Modal4').foundation('close');
		// reload the foundation and open the modal5
		$(document).foundation();
		$('#Modal5').foundation('open');
	});

	// 5. Suggestion modal
	$(document).on('click', '.toModal6', function () {
		event.preventDefault();
		weapon = $(this).attr('dataValue');
		playerSelection.push(weapon);
		console.log(playerSelection);

		if (playerSelection[2] === 'Either') {
			var suggestion = 'Rogue';
			playerSelection.push(suggestion);
			console.log(playerSelection[4]);
			saveToLocal(playerSelection);
		} else if (
			playerSelection[2] === 'Far' &&
			playerSelection[3] === 'Weapons'
		) {
			suggestion = 'Ranger';
			playerSelection.push(suggestion);
			console.log(playerSelection[4]);
			saveToLocal(playerSelection);
		} else if (
			playerSelection[2] === 'Far' &&
			playerSelection[3] === 'Spells'
		) {
			suggestion = 'Wizard';
			playerSelection.push(suggestion);
			console.log(playerSelection[4]);
			saveToLocal(playerSelection);
		} else if (
			playerSelection[2] === 'Close' &&
			playerSelection[3] === 'Weapons'
		) {
			suggestion = 'Fighter';
			playerSelection.push(suggestion);
			console.log(playerSelection[4]);
			saveToLocal(playerSelection);
		} else if (
			playerSelection[2] === 'Close' &&
			playerSelection[3] === 'Spells'
		) {
			suggestion = 'Cleric ';
			playerSelection.push(suggestion);
			console.log(playerSelection[4]);
			saveToLocal(playerSelection);
		}
		console.log(playerSelection);

		// create a div for the modal6
		var modal6 = $('<div>');
		// add class and ID for modal6
		$(modal6).addClass('reveal revealStyle');
		$(modal6).attr('id', 'Modal6');
		$(modal6).attr('data-reveal', '');
		// append the modal5 div to mainbody
		$('#mainBody').append(modal6);

		// create a h1 for the div
		var modal6h1 = $('<h1>');
		// add text for the h1 tag
		$(modal6h1).text('Our Recommendation :');
		// append the modal6h1 to the div
		$(modal6).append(modal6h1);

		// create a p tag for the div
		var modal6p1 = $('<p>');
		// add class and ID for modal3
		$(modal6p1).addClass('lead');
		// add text for the h1 tag
		$(modal6p1).text(
			'You should be a "' +
				playerSelection[0] +
				', ' +
				playerSelection[1] +
				', ' +
				playerSelection[4] +
				' "'
		);
		// append the modal4h1 to the div
		$(modal6).append(modal6p1);

		// create a button tag for the video
		var modal6b1 = $('<button>');
		// add the class and ID for the button
		$(modal6b1).addClass('button toModal7');
		// add value for the button
		$(modal6b1).text('Go to the Introduction Video');
		// append the button to the div
		$(modal6).append(modal6b1);

		// create a button tag for the close button
		var modal6b2 = $('<button>');
		// add the class and attr for the button
		$(modal6b2).addClass('close-button');
		$(modal6b2).attr('data-close', '');
		$(modal6b2).attr('aria-label', 'Close reveal');
		$(modal6b2).attr('type', 'button');
		// add the span for the close button
		$(modal6b2).html('<span aria-hidden="true">&times;</span>');
		// append the button to the div
		$(modal6).append(modal6b2);
		// calls the image to be generated at this point
		randomImage();
		
		// close modal5
		$('#Modal5').foundation('close');
		// reload the foundation and open the modal6
		$(document).foundation();
		$('#Modal6').foundation('open');
		
		
	
	});

	//set Gender, Race and Class to Local Storage and to Name Banner
	function saveToLocal(playerSelection) {
		localStorage.setItem('charGender', playerSelection[0]);
		$('#gender').text(playerSelection[0]);
		localStorage.setItem('charRace', playerSelection[1]);
		$('#race').text(playerSelection[1]);
		localStorage.setItem('charRange', playerSelection[2]);
		localStorage.setItem('charStyle', playerSelection[3]);
		localStorage.setItem('charClass', playerSelection[4]);
		$('#class').text(playerSelection[4]);

	}

	// 6. video modal
	$(document).on('click', '.toModal7', function () {
		event.preventDefault();

		// create a div for the modal7
		var modal7 = $('<div>');
		// add class and ID for modal7
		$(modal7).addClass('reveal revealStyle');
		$(modal7).attr('id', 'Modal7');
		$(modal7).attr('data-reveal', '');
		// append the modal5 div to mainbody
		$('#mainBody').append(modal7);

		// add the span for the close button
		$(modal7).html(
			'<iframe id="player" type="text/html" width="560" height="340" src="" frameborder="0"></iframe>'
		);

		// var queryURL =
		// 	'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCRDVE5L1LTWhmPAKKbUBGtg&maxResults=5&q=' +
		// 	playerSelection[4] +
		// 	'%20crap%20guide&key=AIzaSyC_UlZBmubS3WD0gdVgovaHxaMb9FFgIMM';

		// $.ajax({
		// 	url: queryURL,
		// 	method: 'GET',
		// })
		// .then(function (response) {
		// 	selectedVideo = response.items[0].id.videoId;

		// 	function youTubeReady() {
		// 		$('#player').attr(
		// 			'src',
		// 			'http://www.youtube.com/embed/' +
		// 				selectedVideo +
		// 				'?enablejsapi=1&origin=http://example.com'
		// 		);
		// 	}

		// 	youTubeReady();
		// });

		// create a button tag for the close button
		var modal7b1 = $('<button>');
		// add the class and attr for the button
		$(modal7b1).addClass('close-button');
		$(modal7b1).attr('data-close', '');
		$(modal7b1).attr('aria-label', 'Close reveal');
		$(modal7b1).attr('type', 'button');
		// add the span for the close button
		$(modal7b1).html('<span aria-hidden="true">&times;</span>');
		// append the button to the div
		$(modal7).append(modal7b1);

		// close modal6
		$('#Modal6').foundation('close');
		// reload the foundation and open the modal6
		$(document).foundation();
		$('#Modal7').foundation('open');

		weaponsSpells();
	});
});
