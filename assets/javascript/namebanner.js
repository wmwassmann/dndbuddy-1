var count = 0;
var genderCount = 0;
var raceCount = 0;
var classCount = 0;

// Arrays with images
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

	weaponsSpells();

	//updates the src.URL to equal the image
	$(".centerBioRight img").attr("src",result.src);
};

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

		randomImage();

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
function editGenderRaceClass () {
    
	$("#addDrop").attr("data-dropdown-menu","");
	$("#removeGender").addClass("is-dropdown-submenu-parent opens-right");
	$("#removeRace").addClass("is-dropdown-submenu-parent opens-right");
	$("#removeClass").addClass("is-dropdown-submenu-parent opens-right");
	$("#genderUL").addClass("menu submenu is-dropdown-submenu first-sub vertical");
	$("#raceUL").addClass("menu submenu is-dropdown-submenu first-sub vertical");
	$("#classUL").addClass("menu submenu is-dropdown-submenu first-sub vertical");

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
		
		genderCount = genderCount +1;
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
	
		classCount = classCount +1;
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
		$("#genderUL").removeClass();
		randomImage();
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
		$("#genderUL").removeClass();
		randomImage();
	  });

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
		$("#raceUL").removeClass();
		randomImage();
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
		$("#raceUL").removeClass();
		randomImage();
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
		$("#raceUL").removeClass();
		randomImage();
	});

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
		$("#classUL").removeClass();
		randomImage();
		weaponsSpells();
		
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
		$("#classUL").removeClass();
		randomImage();
		weaponsSpells();
		
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
		$("#classUL").removeClass();
		randomImage();
		weaponsSpells();
		
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
	  $("#classUL").removeClass();
	  randomImage();
	  weaponsSpells();
	  
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
	  $("#classUL").removeClass();
	  randomImage();

	  weaponsSpells();
	  

    });

}

$("#gender").dblclick(function() {
  editGenderRaceClass();
});
 
$("#race").dblclick(function() {
  editGenderRaceClass();

});

$("#class").dblclick(function() {
  editGenderRaceClass();
});



