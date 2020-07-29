var count = 0;
var genderCount = 0;
var raceCount = 0;
var classCount = 0;

$(window).on('load', function () {

	if (localStorage.charClass != null) {
		var name = localStorage.getItem('charName');
		var gender = localStorage.getItem('charGender');
		var race = localStorage.getItem('charRace');
		var classDisplay = localStorage.getItem('charClass');

		$('#characterName').text(name);
		$('#gender').text(gender);
		$('#race').text(race);
		$('#class').text(classDisplay);
	} 
	
	else {
		generateName();

	}
});

function generateName() {
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
};


// Allows Character Name to be edited after double click
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

// Allows user to edit Gender, Race and Class after double click
function editGender () {
    
    $("#addDrop").attr("data-dropdown-menu","");
	$(document).foundation();
	

    if (genderCount === 0) {
    // Creates Female List Item
    var femList = $('<li>');
    $(femList).attr('id', 'femList');
    $(femList).attr('value', 'Female');
    $(femList).text('Female');
    $('#genderUL').append(femList);
    
    // Creates Male List Item
    var maleList = $('<li>');
    $(maleList).attr('id', 'maleList');
    $(maleList).attr('value', 'Male');
    $(maleList).text('Male');
	$('#genderUL').append(maleList);
	genderCount = genderCount +1;

	}

	 // Displays and sets 'Female' to localStorage on Click
	 $('#femList').click(function() {
		var gender = 'Female'
		$('#gender').text(gender);
		localStorage.setItem('charGender', gender);
		$('#femList').remove();
		$('#maleList').remove();
		genderCount = 0;
		$("#addDrop").removeAttr("data-dropdown-menu","");
  		$(document).foundation();
  		$("#removeGender").removeClass();
	  });
  
	  // Displays and sets 'Male' to localStorage on Click
	  $('#maleList').click(function() {
		var gender = "Male"
		$('#gender').text(gender);
		localStorage.setItem('charGender', gender);
		$('#femList').remove();
		$('#maleList').remove();
		genderCount = 0;
		$("#addDrop").removeAttr("data-dropdown-menu","");
  		$(document).foundation();
  		$("#removeGender").removeClass();
	  });
}
	
function editRace () {
	

	$("#addDrop").attr("data-dropdown-menu","");
	$(document).foundation();


    if (raceCount === 0) {
    // Creates Dwarf List Item
    var dwarfList = $('<li>');
    $(dwarfList).attr('id', 'dwarfList');
    $(dwarfList).attr('value', 'Dwarf');
    $(dwarfList).text('Dwarf');
    $('#raceUL').append(dwarfList);
  
    // Creates Elf List Item
    var elfList = $('<li>');
    $(elfList).attr('id', 'elfList');
    $(elfList).attr('value', 'Elf');
    $(elfList).text('Elf');
    $('#raceUL').append(elfList);
  
    // Creates Human List Item
    var humList = $('<li>');
    $(humList).attr('id', 'humList');
    $(humList).attr('value', 'Human');
    $(humList).text('Human');
	$('#raceUL').append(humList);

	raceCount = raceCount + 1;
	}

	 // Displays and sets 'Dwarf' to localStorage on Click
	$('#dwarfList').click(function() {
		var race = 'Dwarf'
		$('#race').text(race);
		localStorage.setItem('charRace', race);
		$('#dwarfList').remove();
		$('#elfList').remove();
		$('#humList').remove();
		raceCount = 0;
		$("#addDrop").removeAttr("data-dropdown-menu","");
		$(document).foundation();
		$("#removeRace").removeClass();
	});
  
	  // Displays and sets 'Elf' to localStorage on Click
	$('#elfList').click(function() {
		var race = "Elf"
		$('#race').text(race);
		localStorage.setItem('charRace', race);
		$('#dwarfList').remove();
		$('#elfList').remove();
		$('#humList').remove();
		raceCount = 0;
		$("#addDrop").removeAttr("data-dropdown-menu","");
		$(document).foundation();
		$("#removeRace").removeClass();
	});
  
	  // Displays and sets 'Human' to localStorage on Click
	$('#humList').click(function() {
		var race = "Human"
		$('#race').text(race);
		localStorage.setItem('charRace', race);
		$('#dwarfList').remove();
		$('#elfList').remove();
		$('#humList').remove();
		raceCount = 0;
		$("#addDrop").removeAttr("data-dropdown-menu","");
		$(document).foundation();
		$("#removeRace").removeClass();
	});
}
  
function editClass () {
	
	$("#addDrop").attr("data-dropdown-menu","");
	$(document).foundation();

    if (classCount === 0) {
    // Creates Cleric List Item
    var cleList = $('<li>');
    $(cleList).attr('id', 'cleList');
    $(cleList).attr('value', 'Cleric');
    $(cleList).text('Cleric');
    $('#classUL').append(cleList);
  
    // Creates Fighter List Item
    var figList = $('<li>');
    $(figList).attr('id', 'figList');
    $(figList).attr('value', 'Fighter');
    $(figList).text('Fighter');
    $('#classUL').append(figList);
    
    // Creates Ranger List Item
    var ranList = $('<li>');
    $(ranList).attr('id', 'ranList');
    $(ranList).attr('value', 'Ranger');
    $(ranList).text('Ranger');
    $('#classUL').append(ranList);
  
    // Creates Rogue List Item
    var rogList = $('<li>');
    $(rogList).attr('id', 'rogList');
    $(rogList).attr('value', 'Rogue');
    $(rogList).text('Rogue');
    $('#classUL').append(rogList);
    
    // Creates Wizard List Item
    var wizList = $('<li>');
    $(wizList).attr('id', 'wizList');
    $(wizList).attr('value', 'Wizard');
    $(wizList).text('Wizard');
	$('#classUL').append(wizList);

	classCount = classCount +1;
	
	}
  
    // Displays and sets 'Cleric' to localStorage on Click
    $('#cleList').click(function() {
		var classDisplay = "Cleric"
		$('#class').text(classDisplay);
		localStorage.setItem('charClass', classDisplay);
		$('#cleList').remove();
		$('#figList').remove();
		$('#ranList').remove();
		$('#rogList').remove();
		$('#wizList').remove();
		classCount = 0;
		$("#addDrop").removeAttr("data-dropdown-menu","");
		$(document).foundation();
		$("#removeClass").removeClass();
    });

    // Displays and sets 'Fighter' to localStorage on Click
    $('#figList').click(function() {
		var classDisplay = "Fighter"
		$('#class').text(classDisplay);
		localStorage.setItem('charClass', classDisplay);
		$('#cleList').remove();
		$('#figList').remove();
		$('#ranList').remove();
		$('#rogList').remove();
		$('#wizList').remove();
		classCount = 0;
		$("#addDrop").removeAttr("data-dropdown-menu","");
		$(document).foundation();
		$("#removeClass").removeClass();
    });
  
    // Displays and sets 'Ranger' to localStorage on Click
    $('#ranList').click(function() {
		var classDisplay = "Ranger"
		$('#class').text(classDisplay);
		localStorage.setItem('charClass', classDisplay);
		$('#cleList').remove();
		$('#figList').remove();
		$('#ranList').remove();
		$('#rogList').remove();
		$('#wizList').remove();
		classCount = 0;
		$("#addDrop").removeAttr("data-dropdown-menu","");
		$(document).foundation();
		$("#removeClass").removeClass();
    });

    // Displays and sets 'Rogue' to localStorage on Click
    $('#rogList').click(function() {
      var classDisplay = "Rogue"
      $('#class').text(classDisplay);
	  localStorage.setItem('charClass', classDisplay);
      $('#cleList').remove();
      $('#figList').remove();
      $('#ranList').remove();
      $('#rogList').remove();
	  $('#wizList').remove();
	  classCount = 0;
	  $("#addDrop").removeAttr("data-dropdown-menu","");
	  $(document).foundation();
	  $("#removeClass").removeClass();
    });

    // Displays and sets 'Wizard' to localStorage on Click
    $('#wizList').click(function() {
      var classDisplay = "Wizard"
      $('#class').text(classDisplay);
	  localStorage.setItem('charClass', classDisplay);
      $('#cleList').remove();
      $('#figList').remove();
      $('#ranList').remove();
      $('#rogList').remove();
	  $('#wizList').remove();
	  classCount = 0;  
	  $("#addDrop").removeAttr("data-dropdown-menu","");
	  $(document).foundation();
	  $("#removeClass").removeClass();
    });
}

$("#gender").dblclick(function() {
  editGender();
 // randomImage();
});
 
$("#race").dblclick(function() {
  editRace();
 // randomImage();
});

$("#class").dblclick(function() {
  editClass();
 // randomImage();
});

