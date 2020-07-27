$(document).foundation();

//API 5e
var abilityURL = "https://www.dnd5eapi.co/api/ability-scores";


var conURL = "https://www.dnd5eapi.co/api/ability-scores/con";
var dexURL = "https://www.dnd5eapi.co/api/ability-scores/dex";
var intURL = "https://www.dnd5eapi.co/api/ability-scores/int";
var wisURL = "https://www.dnd5eapi.co/api/ability-scores/wis";
var strURL = "https://www.dnd5eapi.co/api/ability-scores/str";

var skillsURL = "https://www.dnd5eapi.co/api/skills";
var proURL = "https://www.dnd5eapi.co/api/proficiencies";
var classesURL = "https://www.dnd5eapi.co/api/classes/ranger"

console.log(abilityURL);

console.log(conURL);
console.log(dexURL);
console.log(intURL);
console.log(wisURL);
console.log(strURL);


console.log(skillsURL);
console.log(proURL);
console.log(classesURL);


$("#help-guide").click(function () {
    event.preventDefault();
    // create a div for the modal
    var helpModal = $('<div>');
    // add class and ID for modal1
    $(helpModal).addClass('reveal revealStyle');
    $(helpModal).attr('id', 'helpguide-modal');
    $(helpModal).attr('data-reveal', '');
    // append the modal1 div to mainbody
    $('#mainBody').append(helpModal);
    //ABILITIES
    var abilityTitle = $('<h1>');
    $(abilityTitle).text("Abilities");
    $(helpModal).append(abilityTitle);

    //STRENGTH
    var strTitle = $('<h2>');
    // add text for the h1 tag
    $(strTitle).text("Strength");
    // append the modal1h1 to the div
    $(helpModal).append(strTitle);

    var strText = $('<p>');
    $(strText).attr('id', 'strength-text');
    // add text for the h1 tag
    $(strText).text(" ");
    // append the modal1h1 to the div
    $(helpModal).append(strText);

    //GET to pull Strength description from the API 
    var strURL = "https://www.dnd5eapi.co/api/ability-scores/str";
    console.log(strURL);

    $.ajax({
        url: strURL,
        method: "GET"
    }).then(function (strRes) {
        $("#strength-text").text(strRes.desc)
    });

    //DEXTERITY
    var dexTitle = $('<h2>');
    // add text for the h1 tag
    $(dexTitle).text("Dexterity");
    // append the modal1h1 to the div
    $(helpModal).append(dexTitle);

    var dexText = $('<p>');
    $(dexText).attr('id', 'dex-text');
    // add text for the h1 tag
    $(dexText).text(" ");
    // append the modal1h1 to the div
    $(helpModal).append(dexText);

    //GET to pull Dexterity description from the API 
    var dexURL = "https://www.dnd5eapi.co/api/ability-scores/dex";
    console.log(dexURL);

    $.ajax({
        url: dexURL,
        method: "GET"
    }).then(function (dexRes) {
        $("#dex-text").text(dexRes.desc)
    });

    //CONSTITUTION
    var conTitle = $('<h2>');
    // add text for the h1 tag
    $(conTitle).text("Constitution");
    // append the modal1h1 to the div
    $(helpModal).append(conTitle);

    var conText = $('<p>');
    $(conText).attr('id', 'con-text');
    // add text for the h1 tag
    $(conText).text(" ");
    // append the modal1h1 to the div
    $(helpModal).append(conText);

    //GET to pull Constitution description from the API 
    var conURL = "https://www.dnd5eapi.co/api/ability-scores/con";
    console.log(conURL);

    $.ajax({
        url: conURL,
        method: "GET"
    }).then(function (conRes) {
        $("#con-text").text(conRes.desc)
    });

    //INTELLIGENCE
    var intTitle = $('<h2>');
    // add text for the h1 tag
    $(intTitle).text("Intelligence");
    // append the modal1h1 to the div
    $(helpModal).append(intTitle);

    var intText = $('<p>');
    $(intText).attr('id', 'int-text');
    // add text for the h1 tag
    $(intText).text(" ");
    // append the modal1h1 to the div
    $(helpModal).append(intText);

    //GET to pull Intelligence description from the API 
    var intURL = "https://www.dnd5eapi.co/api/ability-scores/int";
    console.log(intURL);

    $.ajax({
        url: intURL,
        method: "GET"
    }).then(function (intRes) {
        $("#int-text").text(intRes.desc)
    });    

    //WISDOM
    var wisTitle = $('<h2>');
    // add text for the h1 tag
    $(wisTitle).text("Wisdom");
    // append the modal1h1 to the div
    $(helpModal).append(wisTitle);

    var wisText = $('<p>');
    $(wisText).attr('id', 'wis-text');
    // add text for the h1 tag
    $(wisText).text(" ");
    // append the modal1h1 to the div
    $(helpModal).append(wisText);

    //GET to pull Wisdom description from the API 
    var wisURL = "https://www.dnd5eapi.co/api/ability-scores/wis";
    console.log(wisURL);

    $.ajax({
        url: wisURL,
        method: "GET"
    }).then(function (wisRes) {
        $("#wis-text").text(wisRes.desc)
    });   

    //CHARISMA
    var chaTitle = $('<h2>');
    // add text for the h1 tag
    $(chaTitle).text("Charisma");
    // append the modal1h1 to the div
    $(helpModal).append(chaTitle);

    var chaText = $('<p>');
    $(chaText).attr('id', 'charisma-text');
    // add text for the h1 tag
    $(chaText).text(" ");
    // append the modal1h1 to the div
    $(helpModal).append(chaText);

    //GET to pull Charisma description from the API 
    var chaURL = "https://www.dnd5eapi.co/api/ability-scores/cha";
    console.log(chaURL);

    $.ajax({
        url: chaURL,
        method: "GET"
    }).then(function (chaRes) {
        $("#charisma-text").text(chaRes.desc)
    });


    $(document).foundation();
    $('#helpguide-modal').foundation('open');







});
