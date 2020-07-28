var count = 0;

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
	} else {
		generateName();
	}
});

function generateName() {
	var queryURL =
		'https://cors-anywhere.herokuapp.com/https://uzby.com/api.php?min=3&max=8';

	$.ajax({
		url: queryURL,
		method: 'GET',
	}).then(function (response) {
		console.log(response);
		$('#characterName').text(response);
		localStorage.setItem('charName', response);
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
