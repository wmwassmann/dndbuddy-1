<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// Function to push modal responses to name banner
$("body").click(function() {

    if (localStorage.charClass != null) {
=======
$('body').click(function () {
=======
var count = 0;

$(window).on('load', function () {
>>>>>>> a282ab6adc373a51d67989f7622fd28643b6c9e3
	if (localStorage.charClass != null) {
		var name = localStorage.getItem('charName');
		var gender = localStorage.getItem('charGender');
		var race = localStorage.getItem('charRace');
		var classDisplay = localStorage.getItem('charClass');

		$('#characterName').text(name);
		$('#gender').text(gender);
		$('#race').text(race);
		$('#class').text(classDisplay);
	} else {
		generateName();
<<<<<<< HEAD
=======
$(document).ready(function () {
	$(document).foundation();
	$('#Modal1').foundation('open');

	// generate a random number function
	function getRandomInt(max) {
		return Math.floor(Math.random() * Math.floor(max));
>>>>>>> ba4444057af5a80e73ad24178cbad9558cc6cd27
=======
>>>>>>> a282ab6adc373a51d67989f7622fd28643b6c9e3
	}
});

<<<<<<< HEAD
<<<<<<< HEAD
function generateName() {
	var queryURL =
		'https://cors-anywhere.herokuapp.com/https://uzby.com/api.php?min=3&max=8';
>>>>>>> a64f573586ab1d15bd2829548f84e95956defd30
=======
function generateName() {
	var queryURL =
		'https://cors-anywhere.herokuapp.com/https://uzby.com/api.php?min=3&max=8';
>>>>>>> a282ab6adc373a51d67989f7622fd28643b6c9e3

	$.ajax({
		url: queryURL,
		method: 'GET',
	}).then(function (response) {
		console.log(response);
		$('#characterName').text(response);
		localStorage.setItem('charName', response);
<<<<<<< HEAD
=======
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
		// close modal1
		$('#Modal1').foundation('close');
>>>>>>> ba4444057af5a80e73ad24178cbad9558cc6cd27
	});

<<<<<<< HEAD

// Allows Character Name to be edited after double click
function editName() {
	$('#characterName').attr('contenteditable', 'true');
=======
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
>>>>>>> ba4444057af5a80e73ad24178cbad9558cc6cd27

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

<<<<<<< HEAD
<<<<<<< HEAD
function editGenderRaceClass () {

  $(".dropdown").attr("data-options", "data-dropdown-menu");

   
};

$("#gender").dblclick(function() {
  editGenderRaceClass();

});
 
$("#race").dblclick(function() {
  editGenderRaceClass();
});

$("#class").dblclick(function() {
  editGenderRaceClass();
});



{/* <label>Select Race
=======
function editRace() {
	$('#race').text('');

	var createLabelRace = $('<label>');
	$(createLabelRace).text('Select Race');
	$(createLabelRace).attr('id', 'labelRace');
	$('#race').append(createLabelRace);

	var createSelectRace = $('<select>');
	$(createSelectRace).attr('id', 'selectRace');
	$('#lableRace').append(createSelectRace);

	var opt1Race = $('<option>');
	$(opt1Race).text('Dwarf');
	$(opt1Race).attr('value', 'Dwarf');
	$('#selectRace').append(opt1Race);

	var opt2Race = $('<option>');
	$(opt2Race).text('Elf');
	$(opt2Race).attr('value', 'Elf');
	$('#selectRace').append(opt2Race);

	var opt3Race = $('<option>');
	$(opt3Race).text('Human');
	$(opt3Race).attr('value', 'Human');
	$('#selectRace').append(opt3Race);
}

$('#race').dblclick(function () {
	event.preventDefault();
	editRace();
});

{
	/* <label>Select Race
>>>>>>> a64f573586ab1d15bd2829548f84e95956defd30
  <select>
    <option value="Dwarf">Dwarf</option>
    <option value="Elf">Elf</option>
    <option value="Human">Human</option>
  </select>
</label>

    var createLabelClass = $("<label>");
    var createSelectClass = $("<select>");
    var option1Class = $("<option>");
    var option2Class = $("<option>");
    var option3Class = $("<option>");
    var option4Class = $("<option>");
    var option5Class = $("<option>");


<label>Select Class
  <select>
    <option value="Cleric">Cleric</option>
    <option value="Fighter">Fighter</option>
    <option value="Ranger">Ranger</option>
    <option value="Rogue">Rogue</option>
    <option value="Wizard">Wizard</option>
  </select>
</label> */
}
=======
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

		// close modal5
		$('#Modal5').foundation('close');
		// reload the foundation and open the modal6
		$(document).foundation();
		$('#Modal6').foundation('open');
=======
>>>>>>> a282ab6adc373a51d67989f7622fd28643b6c9e3
	});
}

function editName() {
	$('#characterName').attr('contenteditable', 'true');

	if (count === 0) {
		var saveButton = $('<button>');
		$(saveButton).text('Save');
		$(saveButton).attr('id', 'saveBtn');
		$(saveButton).attr('type', 'button');
		$(saveButton).addClass('button');
		$('#characterName').append(saveButton);
		count = count + 1;
	}

	$('#saveBtn').click(function () {
		$('#characterName').attr('contenteditable', 'false');
		$('#saveBtn').remove();
		response = $('#characterName').text();
		localStorage.setItem('charName', response);
		count = 0;
	});
}

$('#characterName').dblclick(function () {
	editName();
});

function editRace() {
	$('#race').text('');

	var createLabelRace = $('<label>');
	$(createLabelRace).text('Select Race');
	$(createLabelRace).attr('id', 'labelRace');
	$('#race').append(createLabelRace);

	var createSelectRace = $('<select>');
	$(createSelectRace).attr('id', 'selectRace');
	$('#lableRace').append(createSelectRace);

	var opt1Race = $('<option>');
	$(opt1Race).text('Dwarf');
	$(opt1Race).attr('value', 'Dwarf');
	$('#selectRace').append(opt1Race);

	var opt2Race = $('<option>');
	$(opt2Race).text('Elf');
	$(opt2Race).attr('value', 'Elf');
	$('#selectRace').append(opt2Race);

	var opt3Race = $('<option>');
	$(opt3Race).text('Human');
	$(opt3Race).attr('value', 'Human');
	$('#selectRace').append(opt3Race);
}

$('#race').dblclick(function () {
	event.preventDefault();
	editRace();
});
<<<<<<< HEAD
>>>>>>> ba4444057af5a80e73ad24178cbad9558cc6cd27
=======

{
	/* <label>Select Race
  <select>
    <option value="Dwarf">Dwarf</option>
    <option value="Elf">Elf</option>
    <option value="Human">Human</option>
  </select>
</label>

    var createLabelClass = $("<label>");
    var createSelectClass = $("<select>");
    var option1Class = $("<option>");
    var option2Class = $("<option>");
    var option3Class = $("<option>");
    var option4Class = $("<option>");
    var option5Class = $("<option>");


<label>Select Class
  <select>
    <option value="Cleric">Cleric</option>
    <option value="Fighter">Fighter</option>
    <option value="Ranger">Ranger</option>
    <option value="Rogue">Rogue</option>
    <option value="Wizard">Wizard</option>
  </select>
</label> */
}
>>>>>>> a282ab6adc373a51d67989f7622fd28643b6c9e3
