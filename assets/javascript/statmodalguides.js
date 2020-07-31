$(document).foundation();

//STRENGTH GUIDE MODAL
$("#str-guide").click(function () {
    event.preventDefault();
    // create a div for the modal
    var strModal = $('<div>');
    // add class and ID for modal
    $(strModal).addClass('reveal revealStyle');
    $(strModal).attr('id', 'str-modal');
    $(strModal).attr('data-reveal', '');
    // append the modal div to mainbody
    $('#mainBody').append(strModal);

    //STRENGTH API
    var strTitle = $('<h2>');
    // add text for the h1 tag
    $(strTitle).text("Strength");
    // append the modal to the div
    $(strModal).append(strTitle);

    var strText = $('<p>');
    $(strText).attr('id', 'strength-text');
    // add text for the h1 tag
    $(strText).text(" ");
    // append the modal to the div
    $(strModal).append(strText);

    //GET to pull Strength description from the API 
    var strURL = "https://www.dnd5eapi.co/api/ability-scores/str";
    // console.log(strURL);

    $.ajax({
        url: strURL,
        method: "GET"
    }).then(function (strRes) {
        $("#strength-text").text(strRes.desc)
    });

    // create a button tag for the close button
    var strClose = $('<button>');
    // add the class and attr for the button
    $(strClose).addClass('close-button');
    $(strClose).attr('data-close', '');
    $(strClose).attr('aria-label', 'Close reveal');
    $(strClose).attr('type', 'button');
    // add the span for the close button
    $(strClose).html('<span aria-hidden="true">&times;</span>');
    // append the button to the div
    $(strModal).append(strClose);

    //Document functionality with Foundation
    $(document).foundation();
    $('#str-modal').foundation('open');
});

//DEXTERITY GUIDE MODAL
$("#dex-guide").click(function () {
    event.preventDefault();
    // create a div for the modal
    var dexModal = $('<div>');
    // add class and ID for modal
    $(dexModal).addClass('reveal revealStyle');
    $(dexModal).attr('id', 'dex-modal');
    $(dexModal).attr('data-reveal', '');
    // append the modal div to mainbody
    $('#mainBody').append(dexModal);


    //DEXTERITY API
    var dexTitle = $('<h2>');
    // add text for the h1 tag
    $(dexTitle).text("Dexterity");
    // append the modal to the div
    $(dexModal).append(dexTitle);

    var dexText = $('<p>');
    $(dexText).attr('id', 'dex-text');
    // add text for the h1 tag
    $(dexText).text(" ");
    // append the modal to the div
    $(dexModal).append(dexText);

    //GET to pull Dexterity description from the API 
    var dexURL = "https://www.dnd5eapi.co/api/ability-scores/dex";
    // console.log(dexURL);

    $.ajax({
        url: dexURL,
        method: "GET"
    }).then(function (dexRes) {
        $("#dex-text").text(dexRes.desc)
    });

    // create a button tag for the close button
    var dexClose = $('<button>');
    // add the class and attr for the button
    $(dexClose).addClass('close-button');
    $(dexClose).attr('data-close', '');
    $(dexClose).attr('aria-label', 'Close reveal');
    $(dexClose).attr('type', 'button');
    // add the span for the close button
    $(dexClose).html('<span aria-hidden="true">&times;</span>');
    // append the button to the div
    $(dexModal).append(dexClose);

    //Document functionality with Foundation
    $(document).foundation();
    $('#dex-modal').foundation('open');
});

//CONSTITUTION GUIDE MODAL
$("#con-guide").click(function () {
    event.preventDefault();
    // create a div for the modal
    var conModal = $('<div>');
    // add class and ID for modal
    $(conModal).addClass('reveal revealStyle');
    $(conModal).attr('id', 'con-modal');
    $(conModal).attr('data-reveal', '');
    // append the modal div to mainbody
    $('#mainBody').append(conModal);

    //CONSTITUTION API
    var conTitle = $('<h2>');
    // add text for the h1 tag
    $(conTitle).text("Constitution");
    // append the modal to the div
    $(conModal).append(conTitle);

    var conText = $('<p>');
    $(conText).attr('id', 'con-text');
    // add text for the h1 tag
    $(conText).text(" ");
    // append the modal to the div
    $(conModal).append(conText);

    //GET to pull Constitution description from the API 
    var conURL = "https://www.dnd5eapi.co/api/ability-scores/con";
    // console.log(conURL);

    $.ajax({
        url: conURL,
        method: "GET"
    }).then(function (conRes) {
        $("#con-text").text(conRes.desc)
    });

    // create a button tag for the close button
    var conClose = $('<button>');
    // add the class and attr for the button
    $(conClose).addClass('close-button');
    $(conClose).attr('data-close', '');
    $(conClose).attr('aria-label', 'Close reveal');
    $(conClose).attr('type', 'button');
    // add the span for the close button
    $(conClose).html('<span aria-hidden="true">&times;</span>');
    // append the button to the div
    $(conModal).append(conClose);

    //Document functionality with Foundation
    $(document).foundation();
    $('#con-modal').foundation('open');
});

//INTELLIGENCE GUIDE MODAL
$("#int-guide").click(function () {
    event.preventDefault();
    // create a div for the modal
    var intModal = $('<div>');
    // add class and ID for modal
    $(intModal).addClass('reveal revealStyle');
    $(intModal).attr('id', 'int-modal');
    $(intModal).attr('data-reveal', '');
    // append the modal div to mainbody
    $('#mainBody').append(intModal);

    //INTELLIGENCE API
    var intTitle = $('<h2>');
    // add text for the h1 tag
    $(intTitle).text("Intelligence");
    // append the modal to the div
    $(intModal).append(intTitle);

    var intText = $('<p>');
    $(intText).attr('id', 'int-text');
    // add text for the h1 tag
    $(intText).text(" ");
    // append the modal to the div
    $(intModal).append(intText);

    //GET to pull Intelligence description from the API 
    var intURL = "https://www.dnd5eapi.co/api/ability-scores/int";
    // console.log(intURL);

    $.ajax({
        url: intURL,
        method: "GET"
    }).then(function (intRes) {
        $("#int-text").text(intRes.desc)
    });    

    // create a button tag for the close button
    var intClose = $('<button>');
    // add the class and attr for the button
    $(intClose).addClass('close-button');
    $(intClose).attr('data-close', '');
    $(intClose).attr('aria-label', 'Close reveal');
    $(intClose).attr('type', 'button');
    // add the span for the close button
    $(intClose).html('<span aria-hidden="true">&times;</span>');
    // append the button to the div
    $(intModal).append(intClose);
    //Document functionality with Foundation
    $(document).foundation();
    $('#int-modal').foundation('open');
});

//WISDOM GUIDE MODAL
$("#wis-guide").click(function () {
    event.preventDefault();
    // create a div for the modal
    var wisModal = $('<div>');
    // add class and ID for modal
    $(wisModal).addClass('reveal revealStyle');
    $(wisModal).attr('id', 'wis-modal');
    $(wisModal).attr('data-reveal', '');
    // append the modal div to mainbody
    $('#mainBody').append(wisModal);

    //WISDOM API
    var wisTitle = $('<h2>');
    // add text for the h1 tag
    $(wisTitle).text("Wisdom");
    // append the modal to the div
    $(wisModal).append(wisTitle);

    var wisText = $('<p>');
    $(wisText).attr('id', 'wis-text');
    // add text for the h1 tag
    $(wisText).text(" ");
    // append the modal to the div
    $(wisModal).append(wisText);

    //GET to pull Wisdom description from the API 
    var wisURL = "https://www.dnd5eapi.co/api/ability-scores/wis";
    // console.log(wisURL);

    $.ajax({
        url: wisURL,
        method: "GET"
    }).then(function (wisRes) {
        $("#wis-text").text(wisRes.desc)
    });  

    // create a button tag for the close button
    var wisClose = $('<button>');
    // add the class and attr for the button
    $(wisClose).addClass('close-button');
    $(wisClose).attr('data-close', '');
    $(wisClose).attr('aria-label', 'Close reveal');
    $(wisClose).attr('type', 'button');
    // add the span for the close button
    $(wisClose).html('<span aria-hidden="true">&times;</span>');
    // append the button to the div
    $(wisModal).append(wisClose);
    //Document functionality with Foundation
    $(document).foundation();
    $('#wis-modal').foundation('open');
});

//CHARISMA GUIDE MODAL
$("#cha-guide").click(function () {
    event.preventDefault();
    // create a div for the modal
    var chaModal = $('<div>');
    // add class and ID for modal
    $(chaModal).addClass('reveal revealStyle');
    $(chaModal).attr('id', 'cha-modal');
    $(chaModal).attr('data-reveal', '');
    // append the modal div to mainbody
    $('#mainBody').append(chaModal);


    //CHARISMA API
    var chaTitle = $('<h2>');
    // add text for the h1 tag
    $(chaTitle).text("Charisma");
    // append the modal to the div
    $(chaModal).append(chaTitle);

    var chaText = $('<p>');
    $(chaText).attr('id', 'charisma-text');
    // add text for the h1 tag
    $(chaText).text(" ");
    // append the modal to the div
    $(chaModal).append(chaText);

    //GET to pull Charisma description from the API 
    var chaURL = "https://www.dnd5eapi.co/api/ability-scores/cha";
    // console.log(chaURL);

    $.ajax({
        url: chaURL,
        method: "GET"
    }).then(function (chaRes) {
        $("#charisma-text").text(chaRes.desc)
    });

    // create a button tag for the close button
    var chaClose = $('<button>');
    // add the class and attr for the button
    $(chaClose).addClass('close-button');
    $(chaClose).attr('data-close', '');
    $(chaClose).attr('aria-label', 'Close reveal');
    $(chaClose).attr('type', 'button');
    // add the span for the close button
    $(chaClose).html('<span aria-hidden="true">&times;</span>');
    // append the button to the div
    $(chaModal).append(chaClose);
    //Document functionality with Foundation
    $(document).foundation();
    $('#cha-modal').foundation('open');
});