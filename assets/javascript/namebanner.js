// Function to push modal responses to name banner
$("body").click(function() {

    if (localStorage.charClass != null) {

        var gender = localStorage.getItem("charGender");
        var race = localStorage.getItem("charRace");
        var classDisplay = localStorage.getItem("charClass");

        $("#gender").text(gender);
        $("#race").text(race);
        $("#class").text(classDisplay);
    }
});


// Allows Character Name to be edited after double click
function editName() {
    $("#characterName").attr( "contenteditable", "true");

    var saveButton = $("<button>");
    $(saveButton).text("Save");
    $(saveButton).attr("id", "saveBtn");
    $(saveButton).attr("type", "button");
    $(saveButton).addClass("button");
    $("#characterName").append(saveButton);

    $("#saveBtn").click(function() {
        $("#characterName").attr( "contenteditable", "false");
        $("#saveBtn").remove();
    });
};

$("#characterName").dblclick(function() {
    editName();
});




function editGenderRaceClass () {

   
};
 
$("#race").dblclick(function() {
    event.preventDefault();
   

    $(document).foundation();


    // create a div for the Gender, Race and Class
    var genderRaceClass = $('<div>');
    // add class and ID for Gender, Race and Class
    $(genderRaceClass).addClass('reveal revealStyle');
    $(genderRaceClass).attr('id', "genRaceClass");
    $(genderRaceClass).attr('data-reveal', '');
    // append the modal1 div to mainbody
    $('#mainBody').append(genderRaceClass);

    editGenderRaceClass();

    $(document).foundation();
    $('#genRaceClass').foundation('open');
    
 
  });



{/* <label>Select Race
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
</label> */}

