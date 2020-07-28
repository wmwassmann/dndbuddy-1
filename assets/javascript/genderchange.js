// Allows user to edit Gender, Race and Class after double click
function editGenderRaceClass () {
    $(document).foundation();
    $("#addDrop").attr("data-dropdown-menu","");
    $(document).foundation();
     
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
    
    // Creates Dwarf List Item
    var dwarfList = $('<li>');
    $(dwarfList).attr('id', 'dwarfList');
    $(dwarfList).attr('value', 'Dwarf');
      $(dwarfList).text('Dwarf');
    $('#raceUL').append(dwarfList);
  
    // Creates Race List Item
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
  
    // Displays and sets 'Female' to localStorage on Click
    $('#femList').click(function() {
      var gender = 'Female'
      $('#gender').text(gender);
      localStorage.setItem('charGender', gender);
      $('#femList').remove();
      $('#maleList').remove();
    });

    // Displays and sets 'Male' to localStorage on Click
    $('#maleList').click(function() {
      var gender = "Male"
      $('#gender').text(gender);
      localStorage.setItem('charGender', gender);
      $('#femList').remove();
      $('#maleList').remove();
    });
  
    // Displays and sets 'Dwarf' to localStorage on Click
    $('#dwarfList').click(function() {
      var race = 'Dwarf'
      $('#race').text(race);
      localStorage.setItem('charRace', race);
      $('#dwarfList').remove();
      $('#elfList').remove();
      $('#humList').remove();
    });

    // Displays and sets 'Elf' to localStorage on Click
    $('#elfList').click(function() {
      var race = "Elf"
      $('#race').text(race);
      localStorage.setItem('charRace', race);
      $('#femList').remove();
      $('#maleList').remove();
      $('#humList').remove();
    });

    // Displays and sets 'Human' to localStorage on Click
    $('#humList').click(function() {
      var race = "Human"
      $('#race').text(race);
      localStorage.setItem('charRace', race);
      $('#femList').remove();
      $('#maleList').remove();
      $('#humList').remove();
    });

    // Displays and sets 'Cleric' to localStorage on Click
    $('#femList').click(function() {
      var gender = 'Female'
      $('#gender').text(gender);
      localStorage.setItem('charGender', gender);
      $('#femList').remove();
      $('#maleList').remove();
    });

    // Displays and sets 'Fighter' to localStorage on Click
    $('#maleList').click(function() {
      var gender = "Male"
      $('#gender').text(gender);
      localStorage.setItem('charGender', gender);
      $('#femList').remove();
      $('#maleList').remove();
    });
  
    // Displays and sets 'Ranger' to localStorage on Click
    $('#dwarfList').click(function() {
      var race = 'Dwarf'
      $('#race').text(race);
      localStorage.setItem('charRace', race);
      $('#dwarfList').remove();
      $('#elfList').remove();
      $('#humList').remove();
    });

    // Displays and sets 'Rogue' to localStorage on Click
    $('#rogList').click(function() {
      var classDisplay = "Rogue"
      $('#race').text(race);
      localStorage.setItem('charClass', classDisplay);
      $('#cleList').remove();
      $('#figList').remove();
      $('#ranList').remove();
      $('#rogList').remove();
      $('#wizList').remove();
      
    });

    // Displays and sets 'Wizard' to localStorage on Click
    $('#wizList').click(function() {
      var classDisplay = "Wizard"
      $('#race').text(race);
      localStorage.setItem('charClass', classDisplay);
      $('#cleList').remove();
      $('#figList').remove();
      $('#ranList').remove();
      $('#rogList').remove();
      $('#wizList').remove();
    });
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