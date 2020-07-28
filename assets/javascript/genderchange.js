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
  
    // Sets Female to localStorage on Click
    $('#femList').click(function() {
      var gender = "Female"
      $('#gender').text(gender);
      localStorage.setItem('charGender', gender);
      $('#femList').remove();
      $('#maleList').remove();
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