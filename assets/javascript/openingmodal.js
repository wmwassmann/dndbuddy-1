$(document).foundation();

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
	$(modal2b1).addClass('button revealButton toModal3');
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
	$(modal2b2).addClass('button revealButton toModal3');
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
	$(modal3b1).addClass('button revealButton toModal4');
	// add the data value for the button
	$(modal3b1).attr('dataValue', 'Dwarf');
	// add value for the button
	$(modal3b1).text('Dwarf');
	// append the button to the div
	$(modal3).append(modal3b1);

	// create a button tag for the answers
	var modal3b2 = $('<button>');
	// add the class and ID for the button
	$(modal3b2).addClass('button revealButton toModal4');
	// add the data value for the button
	$(modal3b2).attr('dataValue', 'Elf');
	// add value for the button
	$(modal3b2).text('Elf');
	// append the button to the div
	$(modal3).append(modal3b2);

	// create a button tag for the answers
	var modal3b3 = $('<button>');
	// add the class and ID for the button
	$(modal3b3).addClass('button revealButton toModal4');
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
	$(modal4b1).addClass('button revealButton toModal5');
	// add the data value for the button
	$(modal4b1).attr('dataValue', 'Close');
	// add value for the button
	$(modal4b1).text('Close');
	// append the button to the div
	$(modal4).append(modal4b1);

	// create a button tag for the answers
	var modal4b2 = $('<button>');
	// add the class and ID for the button
	$(modal4b2).addClass('button revealButton toModal5');
	// add the data value for the button
	$(modal4b2).attr('dataValue', 'Far');
	// add value for the button
	$(modal4b2).text('Far');
	// append the button to the div
	$(modal4).append(modal4b2);

	// create a button tag for the answers
	var modal4b3 = $('<button>');
	// add the class and ID for the button
	$(modal4b3).addClass('button revealButton toModal5');
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
	$(modal5b1).addClass('button revealButton toModal6');
	// add the data value for the button
	$(modal5b1).attr('dataValue', 'Weapons');
	// add value for the button
	$(modal5b1).text('Weapons');
	// append the button to the div
	$(modal5).append(modal5b1);

	// create a button tag for the answers
	var modal5b2 = $('<button>');
	// add the class and ID for the button
	$(modal5b2).addClass('button revealButton toModal6');
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

	if (playerSelection[2] === 'Either') {
		var suggestion = 'Rogue';
		playerSelection.push(suggestion);
		saveToLocal(playerSelection);
	} else if (playerSelection[2] === 'Far' && playerSelection[3] === 'Weapons') {
		suggestion = 'Ranger';
		playerSelection.push(suggestion);
		saveToLocal(playerSelection);
	} else if (playerSelection[2] === 'Far' && playerSelection[3] === 'Spells') {
		suggestion = 'Wizard';
		playerSelection.push(suggestion);
		saveToLocal(playerSelection);
	} else if (
		playerSelection[2] === 'Close' &&
		playerSelection[3] === 'Weapons'
	) {
		suggestion = 'Fighter';
		playerSelection.push(suggestion);
		saveToLocal(playerSelection);
	} else if (
		playerSelection[2] === 'Close' &&
		playerSelection[3] === 'Spells'
	) {
		suggestion = 'Cleric';
		playerSelection.push(suggestion);
		saveToLocal(playerSelection);
	}

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
	// Calls the image, weapons and stats to be generated
	randomImage();
	weaponsSpells();
	stats();

	// close modal5
	$('#Modal5').foundation('close');
	// reload the foundation and the modal6
	$(document).foundation();
	$('#Modal6').foundation('open');
});

//Set Gender, Race and Class to Local Storage and to Name Banner
function saveToLocal(playerSelection) {
	localStorage.setItem('charGender', playerSelection[0]);
	$('#gender').text(playerSelection[0]);
	localStorage.setItem('charRace', playerSelection[1]);
	$('#race').text(playerSelection[1]);
	localStorage.setItem('charRange', playerSelection[2]);
	localStorage.setItem('charStyle', playerSelection[3]);
	localStorage.setItem('charClass', playerSelection[4]);
	$('#class').text(playerSelection[4]);

	// Remove dropdowm elements
	$('#femList').remove();
	$('#maleList').remove();
	$('#removeGender').removeClass();
	$('#genderUL').removeClass();
	$('#dwarfList').remove();
	$('#elfList').remove();
	$('#humList').remove();
	$('#removeRace').removeClass();
	$('#raceUL').removeClass();
	$('#cleList').remove();
	$('#figList').remove();
	$('#ranList').remove();
	$('#rogList').remove();
	$('#wizList').remove();
	$('#removeClass').removeClass();
	$('#classUL').removeClass();
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
	// append the modal7 div to mainbody
	$('#mainBody').append(modal7);

	// iframe
	$(modal7).html(
		'<iframe id="player" type="text/html" width="560" height="340" src="" frameborder="0"></iframe>'
	);

	// Split Youtube API key to prevent API key theft
	var apikey1 = 'AIzaSyCWx6jN3pnU';
	var apikey2 = '-0v7oF5wMmI3z';
	var apikey3 = 'MEx2_ctmc';

	// Youtube API Query and ajax GET
	var queryURL =
		'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCRDVE5L1LTWhmPAKKbUBGtg&maxResults=5&q=' +
		playerSelection[4] +
		'%20crap%20guide&key=' +
		apikey1 +
		apikey2 +
		apikey3;

	$.ajax({
		url: queryURL,
		method: 'GET',
	})

		// Then function to play selected video
		.then(function (response) {
			selectedVideo = response.items[0].id.videoId;

			function youTubeReady() {
				$('#player').attr(
					'src',
					'http://www.youtube.com/embed/' +
						selectedVideo +
						'?enablejsapi=1&origin=http://example.com'
				);
			}

			youTubeReady();
		});

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
});
