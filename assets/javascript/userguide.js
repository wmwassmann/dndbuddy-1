$("#hitplus").click(function() {

	var health = $("#health").text();
	var hitpoints = parseInt(health);
    var total = hitpoints + 1;
	$("#health").text(total);
});

$("#hitminus").click(function() {

	var health = $("#health").text();
	var hitpoints = parseInt(health);
    var total = hitpoints -1;
	$("#health").text(total);
});

$(document).foundation();

//USER GUIDE MODAL
$("#user-guide").click(function () {
    event.preventDefault();
    // create a div for the modal
    var userModal = $('<div>');
    // add class and ID for modal
    $(userModal).addClass('reveal revealStyle');
    $(userModal).attr('id', 'user-modal');
    $(userModal).attr('data-reveal', '');
    // append the modal div to mainbody
	$('#mainBody').append(userModal);
	
    //Character Name Guide
	var bannerName = $('<h2>');
	// add text for the h2 tag
	$(bannerName).text("Edit Name");
	// append the h2 to the div
	$(userModal).append(bannerName);
	var bannerNameP = $('<p>');
	// add text for the h2 tag
	$(bannerNameP).text("Character Name can be edited by double clicking directly on the character's name. An editable text field will appear. Simply type the desired character name and click the save button.");
	// append the p to the div
	$(userModal).append(bannerNameP);

	//Character Gender, Race, Class Guide
	var bannerGen = $('<h2>');
	// add text for the h2 tag
	$(bannerGen).text('Edit Gender, Race or Class');
	// append the h2 to the div
	$(userModal).append(bannerGen);
	var bannerP = $('<p>');
	// add text for the h2 tag
	$(bannerP).text('Character Gender, Race or Class can be edited by double clicking on element. This will generate a dropdown menu of available choices.  Simply click on the desired gender, race or class and it will automatically be applied to your character. NOTE: A CHARACTERS RACE AND CLASS WILL IMPACT ITS ATTRIBUTE STATS.');
	// append the p to the div
	$(userModal).append(bannerP);

	//Hitpoints Guide
	var hitTitle = $('<h2>');
	// add text for the h2 tag
	$(hitTitle).text("Hitpoints");
	// append the h2 to the div
	$(userModal).append(hitTitle);
	var hitP = $('<p>');
	// add text for the h2 tag
	$(hitP).text("Hitpoints determine how tough your character is in combat and other dangerous situations. Hitpoints can be adjusted throughout the campaign by simply clicking on the + or - buttons.");
	// append the p to the div
	$(userModal).append(hitP);
  
	//Armor Class Guide
	var armorTitle = $('<h2>');
	// add text for the h2 tag
	$(armorTitle).text("Armor Class");
	// append the h2 to the div
	$(userModal).append(armorTitle);
	var armorP = $('<p>');
	// add text for the h2 tag
	$(armorP).text("Armor class represents your defense against attacks from monsters.");
	// append the p to the div
	$(userModal).append(armorP);
  
	// create a button tag for the close button
	var userClose = $('<button>');
	// add the class and attr for the button
	$(userClose).addClass('close-button');
	$(userClose).attr('data-close', '');
	$(userClose).attr('aria-label', 'Close reveal');
	$(userClose).attr('type', 'button');
	// add the span for the close button
	$(userClose).html('<span aria-hidden="true">&times;</span>');
	// append the button to the div
	$(userModal).append(userClose);

	//Document functionality with Foundation
	$(document).foundation();
	$('#user-modal').foundation('open');
});	