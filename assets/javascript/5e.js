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
    // append the modal1h1 to the div
    $(strModal).append(strTitle);

    var strText = $('<p>');
    $(strText).attr('id', 'strength-text');
    // add text for the h1 tag
    $(strText).text(" ");
    // append the modal1h1 to the div
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
    // append the modal1h1 to the div
    $(dexModal).append(dexTitle);

    var dexText = $('<p>');
    $(dexText).attr('id', 'dex-text');
    // add text for the h1 tag
    $(dexText).text(" ");
    // append the modal1h1 to the div
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
    // append the modal1h1 to the div
    $(conModal).append(conTitle);

    var conText = $('<p>');
    $(conText).attr('id', 'con-text');
    // add text for the h1 tag
    $(conText).text(" ");
    // append the modal1h1 to the div
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
    // append the modal1h1 to the div
    $(intModal).append(intTitle);

    var intText = $('<p>');
    $(intText).attr('id', 'int-text');
    // add text for the h1 tag
    $(intText).text(" ");
    // append the modal1h1 to the div
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
    // append the modal1h1 to the div
    $(wisModal).append(wisTitle);

    var wisText = $('<p>');
    $(wisText).attr('id', 'wis-text');
    // add text for the h1 tag
    $(wisText).text(" ");
    // append the modal1h1 to the div
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
    // append the modal1h1 to the div
    $(chaModal).append(chaTitle);

    var chaText = $('<p>');
    $(chaText).attr('id', 'charisma-text');
    // add text for the h1 tag
    $(chaText).text(" ");
    // append the modal1h1 to the div
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

//SPELLS AND EQUIPMENT HELP GUIDE MODALS

function guideRender() {
    $("#equipment-guide").click(function () {
        
        event.preventDefault();
        $(document).foundation();
        var classEquip = localStorage.getItem("charClass");

        
    //--------WIZARD GUIDE--------

            if (classEquip === "Wizard") {

                //CREATES MODAL    
                    // create a div for the modal
                    var equipModal = $('<div>');
                    // add class and ID for modal
                    $(equipModal).addClass('reveal revealStyle');
                    $(equipModal).attr('id', 'equipguide-modal');
                    $(equipModal).attr('data-reveal', '');
                    // append the modal div to mainbody
                    $('#mainBody').append(equipModal);
                    
                //SPELLS DESCRIPTION

                    var spellsTitle = $('<h1>');
                    $(spellsTitle).text("Wizard Spells");
                    $(equipModal).append(spellsTitle);

                //FIREBOLT
                    //create Title html element
                    var fbdTitle = $('<h2>');
                    // add text for the h1 tag
                    $(fbdTitle).text("Fire Bolt");
                    // append the modal1h1 to the div
                    $(equipModal).append(fbdTitle);

                    //creates tags for description text
                    var fbdText = $('<p>');
                    $(fbdText).attr('id', 'fbd-text');
                    // add text for the h1 tag
                    $(fbdText).text(" ");
                    // append the modal1h1 to the div
                    $(equipModal).append(fbdText);

                    //API "gets" spell info
                    var fbdescURL = "https://www.dnd5eapi.co/api/spells/fire-bolt";
                    $.ajax({
                        url: fbdescURL,
                        method: "GET"
                    }).then(function (fbdRes) {
                        $("#fbd-text").text(fbdRes.desc)
                    });

                //MAGE HAND
                    //create Title html element
                    var mhdTitle = $('<h2>');
                    // add text for the h1 tag
                    $(mhdTitle).text("Mage Hand");
                    // append the modal1h1 to the div
                    $(equipModal).append(mhdTitle);

                    //creates tags for description text
                    var mhdText = $('<p>');
                    $(mhdText).attr('id', 'mhd-text');
                    // add text for the h1 tag
                    $(mhdText).text(" ");
                    // append the modal1h1 to the div
                    $(equipModal).append(mhdText);

                    //API "gets" spell info
                    var mhdescURL = "https://www.dnd5eapi.co/api/spells/mage-hand";
                    $.ajax({
                        url: mhdescURL,
                        method: "GET"
                    }).then(function (mhdRes) {
                        $("#mhd-text").text(mhdRes.desc)
                    });

                //MAGIC MISSILE
                    //create Title html element
                    var mmdTitle = $('<h2>');
                    // add text for the h1 tag
                    $(mmdTitle).text("Magic Missile");
                    // append the modal1h1 to the div
                    $(equipModal).append(mmdTitle);

                    //creates tags for description text
                    var mmdText = $('<p>');
                    $(mmdText).attr('id', 'mmd-text');
                    // add text for the h1 tag
                    $(mmdText).text(" ");
                    // append the modal1h1 to the div
                    $(equipModal).append(mmdText);

                    //API "gets" spell info
                    var mmdescURL = "https://www.dnd5eapi.co/api/spells/magic-missile";
                    $.ajax({
                        url: mmdescURL,
                        method: "GET"
                    }).then(function (mmdRes) {
                        $("#mmd-text").text(mmdRes.desc)
                    });

                //MAGE ARMOR
                    //create Title html element
                    var madTitle = $('<h2>');
                    // add text for the h1 tag
                    $(madTitle).text("Mage Armor");
                    // append the modal1h1 to the div
                    $(equipModal).append(madTitle);

                    //creates tags for description text
                    var madText = $('<p>');
                    $(madText).attr('id', 'mad-text');
                    // add text for the h1 tag
                    $(madText).text(" ");
                    // append the modal1h1 to the div
                    $(equipModal).append(madText);

                    //API "gets" spell info
                    var madescURL = "https://www.dnd5eapi.co/api/spells/mage-armor";
                    $.ajax({
                        url: madescURL,
                        method: "GET"
                    }).then(function (madRes) {
                        $("#mad-text").text(madRes.desc)
                    });

                //CREATES CLOSE BUTTON
                    var eClose = $('<button>');
                    // add the class and attr for the button
                    $(eClose).addClass('close-button');
                    $(eClose).attr('data-close', '');
                    $(eClose).attr('aria-label', 'Close reveal');
                    $(eClose).attr('type', 'button');
                    // add the span for the close button
                    $(eClose).html('<span aria-hidden="true">&times;</span>');
                    // append the button to the div
                    $(equipModal).append(eClose);
                    //Document functionality with Foundation
                    $(document).foundation();
                    $('#equipguide-modal').foundation('open');
                
    //--------FIGHTER GUIDE--------

            }else if (classEquip === "Fighter") {

                //CREATES MODAL    
                    // create a div for the modal
                    var equipModal2 = $('<div>');
                    // add class and ID for modal
                    $(equipModal2).addClass('reveal revealStyle');
                    $(equipModal2).attr('id', 'equipguide-modal2');
                    $(equipModal2).attr('data-reveal', '');
                    // append the modal div to mainbody
                    $('#mainBody').append(equipModal2);

                    var fighterTitle = $('<h1>');
                    $(fighterTitle).text("Fighter Bonus Features");
                    $(equipModal2).append(fighterTitle);

                //GREAT WEAPON FIGHTING 
                    //create Title html element
                    var gwdTitle = $('<h2>');
                    // add text for the h1 tag
                    $(gwdTitle).text("Great Weapon Fighting Style");
                    // append the modal1h1 to the div
                    $(equipModal2).append(gwdTitle);

                    //creates tags for description text
                    var gwdText = $('<p>');
                    $(gwdText).attr('id', 'gwd-text');
                    // add text for the h1 tag
                    $(gwdText).text(" ");
                    // append the modal1h1 to the div
                    $(equipModal2).append(gwdText);

                    //API "gets" spell info
                    var gwdescURL = "https://www.dnd5eapi.co/api/features/fighter-fighting-style-great-weapon-fighting";
                    $.ajax({
                        url: gwdescURL,
                        method: "GET"
                    }).then(function (gwdRes) {
                        $("#gwd-text").text(gwdRes.desc)
                    });

                //SECOND WIND 
                    //create Title html element
                    var swdTitle = $('<h2>');
                    // add text for the h1 tag
                    $(swdTitle).text("Second Wind");
                    // append the modal1h1 to the div
                    $(equipModal2).append(swdTitle);

                    //creates tags for description text
                    var swdText = $('<p>');
                    $(swdText).attr('id', 'swd-text');
                    // add text for the h1 tag
                    $(swdText).text(" ");
                    // append the modal1h1 to the div
                    $(equipModal2).append(swdText);

                    //API "gets" spell info
                    var swdescURL = "https://www.dnd5eapi.co/api/features/second-wind";
                    $.ajax({
                        url: swdescURL,
                        method: "GET"
                    }).then(function (swdRes) {
                        $("#swd-text").text(swdRes.desc)
                    });

                //CREATES CLOSE BUTTON
                    var eClose2 = $('<button>');
                    // add the class and attr for the button
                    $(eClose2).addClass('close-button');
                    $(eClose2).attr('data-close', '');
                    $(eClose2).attr('aria-label', 'Close reveal');
                    $(eClose2).attr('type', 'button');
                    // add the span for the close button
                    $(eClose2).html('<span aria-hidden="true">&times;</span>');
                    // append the button to the div
                    $(equipModal2).append(eClose2);
                    //Document functionality with Foundation
                    $(document).foundation();
                    $('#equipguide-modal2').foundation('open');
                
    //--------CLERIC GUIDE--------

            }else if (classEquip === "Cleric") {

                //CREATES MODAL
                    // create a div for the modal
                    var equipModal3 = $('<div>');
                    // add class and ID for modal
                    $(equipModal3).addClass('reveal revealStyle');
                    $(equipModal3).attr('id', 'equipguide-modal3');
                    $(equipModal3).attr('data-reveal', '');
                    // append the modal div to mainbody
                    $('#mainBody').append(equipModal3);

                    var clericTitle = $('<h1>');
                    $(clericTitle).text("Cleric Spells");
                    $(equipModal3).append(clericTitle);

                //CURE WOUNDS
                    //create Title html element
                    var cwdTitle = $('<h2>');
                    // add text for the h1 tag
                    $(cwdTitle).text("Cure Wounds");
                    // append the modal1h1 to the div
                    $(equipModal3).append(cwdTitle);

                    //creates tags for description text
                    var cwdText = $('<p>');
                    $(cwdText).attr('id', 'cwd-text');
                    // add text for the h1 tag
                    $(cwdText).text(" ");
                    // append the modal1h1 to the div
                    $(equipModal3).append(cwdText);

                    //API "gets" spell info
                    var cwdescURL = "https://www.dnd5eapi.co/api/spells/cure-wounds";
                    $.ajax({
                        url: cwdescURL,
                        method: "GET"
                    }).then(function (cwdRes) {
                        $("#cwd-text").text(cwdRes.desc)
                    });

                //SPARE THE DYING
                    //create Title html element
                    var sddTitle = $('<h2>');
                    // add text for the h1 tag
                    $(sddTitle).text("Spare The Dying");
                    // append the modal1h1 to the div
                    $(equipModal3).append(sddTitle);

                    //creates tags for description text
                    var sddText = $('<p>');
                    $(sddText).attr('id', 'sdd-text');
                    // add text for the h1 tag
                    $(sddText).text(" ");
                    // append the modal1h1 to the div
                    $(equipModal3).append(sddText);

                    //API "gets" spell info
                    var sddescURL = "https://www.dnd5eapi.co/api/spells/spare-the-dying";
                    $.ajax({
                        url: sddescURL,
                        method: "GET"
                    }).then(function (sddRes) {
                        $("#sdd-text").text(sddRes.desc)
                    });

                //CREATES CLOSE BUTTON
                    var eClose3 = $('<button>');
                    // add the class and attr for the button
                    $(eClose3).addClass('close-button');
                    $(eClose3).attr('data-close', '');
                    $(eClose3).attr('aria-label', 'Close reveal');
                    $(eClose3).attr('type', 'button');
                    // add the span for the close button
                    $(eClose3).html('<span aria-hidden="true">&times;</span>');
                    // append the button to the div
                    $(equipModal3).append(eClose3);
                    //Document functionality with Foundation
                    $(document).foundation();
                    $('#equipguide-modal3').foundation('open');

    //--------ROGUE GUIDE--------

            }else if (classEquip === "Rogue") {

                //CREATES MODAL
                    // create a div for the modal
                    var equipModal4 = $('<div>');
                    // add class and ID for modal
                    $(equipModal4).addClass('reveal revealStyle');
                    $(equipModal4).attr('id', 'equipguide-modal4');
                    $(equipModal4).attr('data-reveal', '');
                    // append the modal div to mainbody
                    $('#mainBody').append(equipModal4);

                    var rogueTitle = $('<h1>');
                    $(rogueTitle).text("Rogue Abilities");
                    $(equipModal4).append(rogueTitle); 

                //SNEAK ATTACK    
                    //create Title html element
                    var snkdTitle = $('<h2>');
                    // add text for the h1 tag
                    $(snkdTitle).text("Sneak Attack");
                    // append the modal1h1 to the div
                    $(equipModal4).append(snkdTitle);

                    //creates tags for description text
                    var snkdText = $('<p>');
                    $(snkdText).attr('id', 'snkd-text');
                    // add text for the h1 tag
                    $(snkdText).text(" ");
                    // append the modal1h1 to the div
                    $(equipModal4).append(snkdText);

                    //API "gets" spell info
                    var snkdescURL = "https://www.dnd5eapi.co/api/features/sneak-attack";
                    $.ajax({
                        url: snkdescURL,
                        method: "GET"
                    }).then(function (snkdRes) {
                        $("#snkd-text").text(snkdRes.desc)
                    });

                //THIEVES' CANT
                    //create Title html element
                    var cantdTitle = $('<h2>');
                    // add text for the h1 tag
                    $(cantdTitle).text("Thieves' Cant");
                    // append the modal1h1 to the div
                    $(equipModal4).append(cantdTitle);

                    //creates tags for description text
                    var cantdText = $('<p>');
                    $(cantdText).attr('id', 'cantd-text');
                    // add text for the h1 tag
                    $(cantdText).text(" ");
                    // append the modal1h1 to the div
                    $(equipModal4).append(cantdText);

                    //API "gets" spell info
                    var cantdescURL = "https://www.dnd5eapi.co/api/features/thieves-cant";
                    $.ajax({
                        url: cantdescURL,
                        method: "GET"
                    }).then(function (cantdRes) {
                        $("#cantd-text").text(cantdRes.desc)
                    });

                //THIEVES' TOOLS
                    //create Title html element
                    var ttdTitle = $('<h2>');
                    // add text for the h1 tag
                    $(ttdTitle).text("Thieves' Tools");
                    // append the modal1h1 to the div
                    $(equipModal4).append(ttdTitle);

                    //creates tags for description text
                    var ttdText = $('<p>');
                    $(ttdText).attr('id', 'ttd-text');
                    // add text for the h1 tag
                    $(ttdText).text(" ");
                    // append the modal1h1 to the div
                    $(equipModal4).append(ttdText);

                    //API "gets" spell info
                    var ttdescURL = "https://www.dnd5eapi.co/api/equipment/thieves-tools";
                    $.ajax({
                        url: ttdescURL,
                        method: "GET"
                    }).then(function (ttdRes) {
                        $("#ttd-text").text(ttdRes.desc)
                    });

                //CREATES CLOSE BUTTON
                    var eClose4 = $('<button>');
                    // add the class and attr for the button
                    $(eClose4).addClass('close-button');
                    $(eClose4).attr('data-close', '');
                    $(eClose4).attr('aria-label', 'Close reveal');
                    $(eClose4).attr('type', 'button');
                    // add the span for the close button
                    $(eClose4).html('<span aria-hidden="true">&times;</span>');
                    // append the button to the div
                    $(equipModal4).append(eClose4);
                    //Document functionality with Foundation
                    $(document).foundation();
                    $('#equipguide-modal4').foundation('open');

    //--------RANGER GUIDE--------      

            }else if (classEquip === "Ranger") {

                //CREATES MODAL
                    // create a div for the modal
                    var equipModal5 = $('<div>');
                    // add class and ID for modal
                    $(equipModal5).addClass('reveal revealStyle');
                    $(equipModal5).attr('id', 'equipguide-modal5');
                    $(equipModal5).attr('data-reveal', '');
                    // append the modal div to mainbody
                    $('#mainBody').append(equipModal5);

                    var rangerTitle = $('<h1>');
                    $(rangerTitle).text("Ranger Abilities");
                    $(equipModal5).append(rangerTitle);
                    
                //FAVORED ENEMY   
                    //create Title html element
                    var fedTitle = $('<h2>');
                    // add text for the h1 tag
                    $(fedTitle).text("Favored Enemy");
                    // append the modal1h1 to the div
                    $(equipModal5).append(fedTitle);

                    //creates tags for description text
                    var fedText = $('<p>');
                    $(fedText).attr('id', 'fed-text');
                    // add text for the h1 tag
                    $(fedText).text(" ");
                    // append the modal1h1 to the div
                    $(equipModal5).append(fedText);

                    //API "gets" spell info
                    var fedescURL = "https://www.dnd5eapi.co/api/features/favored-enemy-1-type";
                    $.ajax({
                        url: fedescURL,
                        method: "GET"
                    }).then(function (fedRes) {
                        $("#fed-text").text(fedRes.desc)
                    });

                //NATURAL EXPLORER
                    //create Title html element
                    var nedTitle = $('<h2>');
                    // add text for the h1 tag
                    $(nedTitle).text("Natural Explorer");
                    // append the modal1h1 to the div
                    $(equipModal5).append(nedTitle);

                    //creates tags for description text
                    var nedText = $('<p>');
                    $(nedText).attr('id', 'ned-text');
                    // add text for the h1 tag
                    $(nedText).text(" ");
                    // append the modal1h1 to the div
                    $(equipModal5).append(nedText);

                    //API "gets" spell info
                    var nedescURL = "https://www.dnd5eapi.co/api/features/natural-explorer-1-terrain-type";
                    $.ajax({
                        url: nedescURL,
                        method: "GET"
                    }).then(function (nedRes) {
                        $("#ned-text").text(nedRes.desc)
                    });
                
                //CREATES CLOSE BUTTON
                    var eClose5 = $('<button>');
                    // add the class and attr for the button
                    $(eClose5).addClass('close-button');
                    $(eClose5).attr('data-close', '');
                    $(eClose5).attr('aria-label', 'Close reveal');
                    $(eClose5).attr('type', 'button');
                    // add the span for the close button
                    $(eClose5).html('<span aria-hidden="true">&times;</span>');
                    // append the button to the div
                    $(equipModal5).append(eClose5);
                    //Document functionality with Foundation
                    $(document).foundation();
                    $('#equipguide-modal5').foundation('open');
            }
    });
}        

//EQUIPMENT AND SPELLS HTML

function weaponsSpells() {

    var classEquip = localStorage.getItem("charClass");

    console.log(classEquip);

//--------WIZARD SPELLS AND EQUIPMENT--------
         
        if (classEquip === "Wizard") {
                
            var fireboltURL = "https://www.dnd5eapi.co/api/spells/fire-bolt";
            var magehandURL = "https://www.dnd5eapi.co/api/spells/mage-hand";
            var magicmissileURL = "https://www.dnd5eapi.co/api/spells/magic-missile";
            var magearmorURL = "https://www.dnd5eapi.co/api/spells/mage-armor";
            
        //FIREBOLT HTML
            $.ajax({
                url: fireboltURL,
                method: "GET"
            }).then(function (fbRes) {
                $('#equipment-1').html("<h5>" + "Fire-Bolt: 1d10" + "</h5>")
                .append("Range: " + fbRes.range)
                .append("<br />" + "Casting Time: " + fbRes.casting_time)
                .append("<br />" + "Level: " + fbRes.level)
            });
        //MAGE HAND HTML
            $.ajax({
                url: magehandURL,
                method: "GET"
            }).then(function (mhRes) {
                $("#equipment-2").html("<h5>" + "Mage Hand" + "</h5>")
                .append("Range: " + mhRes.range)
                .append("<br />" + "Casting Time: " + mhRes.casting_time)
                .append("<br />" + "Level: " + mhRes.level)
            });
        //MAGIC MISSILE HTML
            $.ajax({
                url: magicmissileURL,
                method: "GET"
            }).then(function (mmRes) {
                $("#equipment-3").html("<h5>" + "Magic Missile: 3x (1d4)+1 force damage" + "</h5>")
                .append("Range: " + mmRes.range)
                .append("<br />" + "Casting Time: " + mmRes.casting_time)
                .append("<br />" + "Level: " + mmRes.level)
            });
        //MAGE ARMOR HTML
            $.ajax({
                url: magearmorURL,
                method: "GET"
            }).then(function (maRes) {
                $("#equipment-4").html("<h5>" + "Mage Armor" + "</h5>")
                .append("Duration: " + maRes.duration)
                .append("<br />" + "Casting Time: " + maRes.casting_time)
                .append("<br />" + "Level: " + maRes.level)
            });                

        //QUARTERSTAFF HTML
            $("#equipment-5").html("<h5>" + "Quarterstaff: 1d6 bludgeoning damage" + "</h5>")

            
        
//--------FIGHTER EQUIPMENT--------

        }else if (classEquip === "Fighter") {
            
        //GREATSWORD HTML
            $('#equipment-1').html("<h5>" + "Greatsword: 2d6 slashing damage" + "</h5>")
        //MEDIUM ARMOR HTML
            .append("<h5>" + "Medium Armor" + "</h5>");
            $("#equipment-2").html(" ");
            $("#equipment-3").html(" ");
            $("#equipment-4").html(" ");
            $("#equipment-5").html(" ")

            
        
        
//--------CLERIC SPELLS AND EQUIPMENT--------

        }else if (classEquip === "Cleric") {

            var spareTheDyingURL = "https://www.dnd5eapi.co/api/spells/spare-the-dying";
            var cureWoundsURL = "https://www.dnd5eapi.co/api/spells/cure-wounds";
        
        //CURE WOUNDS HTML
            $.ajax({
                url: cureWoundsURL,
                method: "GET"
            }).then(function (cwRes) {
                $('#equipment-1').html("<h5>" + "Cure Wounds: (1d8) + 2 (WIS modifier)" + "</h5>")
                .append("Range: " + cwRes.range)
                .append("<br />" + "Casting Time: " + cwRes.casting_time)
                .append("<br />" + "Level: " + cwRes.level)
            });
        //CURE WOUNDS HTML
            $.ajax({
                url: spareTheDyingURL,
                method: "GET"
            }).then(function (sdRes) {
                $('#equipment-2').html("<h5>" + "Spare The Dying" + "</h5>")
                .append("Range: " + sdRes.range)
                .append("<br />" + "Casting Time: " + sdRes.casting_time)
                .append("<br />" + "Level: " + sdRes.level)
            });
        //MACE
            $("#equipment-3").html("<h5>" + "Mace: 1d6 bludgeoning damage" + "</h5>")
        //MEDIUM ARMOR    
            .append("<h5>" + "Medium Armor" + "</h5>")
        //SHIELD    
            .append("<h5>" + "Shield" + "</h5>");
            $("#equipment-4").html(" ");
            $("#equipment-5").html(" ")


//--------ROGUE EQUIPMENT--------

        }else if (classEquip === "Rogue") {

            var shortbowURL = "https://www.dnd5eapi.co/api/equipment/shortbow";
        //DAGGER    
            $("#equipment-1").html("<h5>" + "Dagger: 1d4 slashing damage" + "</h5>");
        //SHORTBOW
            $.ajax({
                url: shortbowURL,
                method: "GET"
            }).then(function (sbRes) {
                $("#equipment-2").html("<h5>" + "Short Bow: 1d6 piercing damage" + "</h5>")
                .append("Range: " + sbRes.range.normal + "-" + sbRes.range.long + " feet")
            });
        //LIGHT ARMOR
            $("#equipment-3").html("<h5>" + "Light Armor" + "</h5>");
        //THIEVES TOOLS
            $("#equipment-4").html("<h5>" + "Thieves Tools" + "</h5>");
            $("#equipment-5").html(" ")


//--------RANGER EQUIPMENT--------

        }else if (classEquip === "Ranger") {

            var longbowURL = "https://www.dnd5eapi.co/api/equipment/longbow";
        //SHORTSWORD
            $("#equipment-1").html("<h5>" + "Shortsword: 1d6 slashing damage" + "</h5>");
        //LONGBOW
            $.ajax({
                url: longbowURL,
                method: "GET"
            }).then(function (lbRes) {
                $("#equipment-2").html("<h5>" + "Longbow: 1d8 piercing damage" + "</h5>")
                .append("Range: " + lbRes.range.normal + "-" + lbRes.range.long + " feet")
            });
        //LEATHER ARMOR
            $("#equipment-3").html("<h5>" + "Leather Armor" + "</h5>");
            $("#equipment-4").html(" ");
            $("#equipment-5").html(" ")
        }

//--------RENDERS GUIDES--------    
        guideRender();
}

//SKILLS GUIDE

$("#skills-guide").click(function () {
        
    event.preventDefault();
    $(document).foundation();


    //CREATES MODAL    
        // create a div for the modal
        var skillModal = $('<div>');
        // add class and ID for modal
        $(skillModal).addClass('reveal revealStyle');
        $(skillModal).attr('id', 'skillguide-modal');
        $(skillModal).attr('data-reveal', '');
        // append the modal div to mainbody
        $('#mainBody').append(skillModal);
        
    //SKILLS TITLE

        var skillsTitle = $('<h1>');
        $(skillsTitle).text("Skills");
        $(skillModal).append(skillsTitle);

    //ACROBATICS
        //create Title html element
        var arcoTitle = $('<h2>');
        // add text for the h1 tag
        $(arcoTitle).text("Acrobatics");
        // append the modal1h1 to the div
        $(skillModal).append(arcoTitle);

        //creates tags for description text
        var acroText = $('<p>');
        $(acroText).attr('id', 'acro-text');
        // add text for the h1 tag
        $(acroText).text(" ");
        // append the modal1h1 to the div
        $(skillModal).append(acroText);

        //API "gets" spell info
        var acrobaticsURL = "https://www.dnd5eapi.co/api/skills/acrobatics";
        $.ajax({
            url: acrobaticsURL,
            method: "GET"
        }).then(function (acroRes) {
            $("#acro-text").text(acroRes.desc)
        });

    //ANIMAL HANDLING
        //create Title html element
        var ahTitle = $('<h2>');
        // add text for the h1 tag
        $(ahTitle).text("Animal Handling");
        // append the modal1h1 to the div
        $(skillModal).append(ahTitle);

        //creates tags for description text
        var ahText = $('<p>');
        $(ahText).attr('id', 'ah-text');
        // add text for the h1 tag
        $(ahText).text(" ");
        // append the modal1h1 to the div
        $(skillModal).append(ahText);

        //API "gets" spell info
        var animalHandlingURL = "https://www.dnd5eapi.co/api/skills/animal-handling";
        $.ajax({
            url: animalHandlingURL,
            method: "GET"
        }).then(function (ahRes) {
            $("#ah-text").text(ahRes.desc)
        });

    //ARCANA
        //create Title html element
        var arcanaTitle = $('<h2>');
        // add text for the h1 tag
        $(arcanaTitle).text("Arcana");
        // append the modal1h1 to the div
        $(skillModal).append(arcanaTitle);

        //creates tags for description text
        var arcanaText = $('<p>');
        $(arcanaText).attr('id', 'arcana-text');
        // add text for the h1 tag
        $(arcanaText).text(" ");
        // append the modal1h1 to the div
        $(skillModal).append(arcanaText);

        //API "gets" spell info
        var arcanaURL = "https://www.dnd5eapi.co/api/skills/arcana";
        $.ajax({
            url: arcanaURL,
            method: "GET"
        }).then(function (arcanaRes) {
            $("#arcana-text").text(arcanaRes.desc)
        });

    //ATHLETICS
        //create Title html element
        var athTitle = $('<h2>');
        // add text for the h1 tag
        $(athTitle).text("Athletics");
        // append the modal1h1 to the div
        $(skillModal).append(athTitle);

        //creates tags for description text
        var athText = $('<p>');
        $(athText).attr('id', 'ath-text');
        // add text for the h1 tag
        $(athText).text(" ");
        // append the modal1h1 to the div
        $(skillModal).append(athText);

        //API "gets" spell info
        var athleticsURL = "https://www.dnd5eapi.co/api/skills/athletics";
        $.ajax({
            url: athleticsURL,
            method: "GET"
        }).then(function (athRes) {
            $("#ath-text").text(athRes.desc)
        });

    //DECEPTION
        //create Title html element
        var deceptionTitle = $('<h2>');
        // add text for the h1 tag
        $(deceptionTitle).text("Deception");
        // append the modal1h1 to the div
        $(skillModal).append(deceptionTitle);

        //creates tags for description text
        var deceptionText = $('<p>');
        $(deceptionText).attr('id', 'deception-text');
        // add text for the h1 tag
        $(deceptionText).text(" ");
        // append the modal1h1 to the div
        $(skillModal).append(deceptionText);

        //API "gets" spell info
        var deceptionURL = "https://www.dnd5eapi.co/api/skills/deception";
        $.ajax({
            url: deceptionURL,
            method: "GET"
        }).then(function (deceptionRes) {
            $("#deception-text").text(deceptionRes.desc)
        });

    //HISTORY
        //create Title html element
        var historyTitle = $('<h2>');
        // add text for the h1 tag
        $(historyTitle).text("History");
        // append the modal1h1 to the div
        $(skillModal).append(historyTitle);

        //creates tags for description text
        var historyText = $('<p>');
        $(historyText).attr('id', 'history-text');
        // add text for the h1 tag
        $(historyText).text(" ");
        // append the modal1h1 to the div
        $(skillModal).append(historyText);

        //API "gets" spell info
        var historyURL = "https://www.dnd5eapi.co/api/skills/history";
        $.ajax({
            url: historyURL,
            method: "GET"
        }).then(function (historyRes) {
            $("#history-text").text(historyRes.desc)
        });

    //INSIGHT
        //create Title html element
        var insightTitle = $('<h2>');
        // add text for the h1 tag
        $(insightTitle).text("Insight");
        // append the modal1h1 to the div
        $(skillModal).append(insightTitle);

        //creates tags for description text
        var insightText = $('<p>');
        $(insightText).attr('id', 'insight-text');
        // add text for the h1 tag
        $(insightText).text(" ");
        // append the modal1h1 to the div
        $(skillModal).append(insightText);

        //API "gets" spell info
        var insightURL = "https://www.dnd5eapi.co/api/skills/insight";
        $.ajax({
            url: insightURL,
            method: "GET"
        }).then(function (insightRes) {
            $("#insight-text").text(insightRes.desc)
        });

    //INTIMIDATION
        //create Title html element
        var intimidationTitle = $('<h2>');
        // add text for the h1 tag
        $(intimidationTitle).text("Intimidation");
        // append the modal1h1 to the div
        $(skillModal).append(intimidationTitle);

        //creates tags for description text
        var intimidationText = $('<p>');
        $(intimidationText).attr('id', 'intimidation-text');
        // add text for the h1 tag
        $(intimidationText).text(" ");
        // append the modal1h1 to the div
        $(skillModal).append(intimidationText);

        //API "gets" spell info
        var intimidationURL = "https://www.dnd5eapi.co/api/skills/intimidation";
        $.ajax({
            url: intimidationURL,
            method: "GET"
        }).then(function (intimidationRes) {
            $("#intimidation-text").text(intimidationRes.desc)
        });

    //INVESTIGATION
        //create Title html element
        var investigationTitle = $('<h2>');
        // add text for the h1 tag
        $(investigationTitle).text("Investigation");
        // append the modal1h1 to the div
        $(skillModal).append(investigationTitle);

        //creates tags for description text
        var investigationText = $('<p>');
        $(investigationText).attr('id', 'investigation-text');
        // add text for the h1 tag
        $(investigationText).text(" ");
        // append the modal1h1 to the div
        $(skillModal).append(investigationText);

        //API "gets" spell info
        var investigationURL = "https://www.dnd5eapi.co/api/skills/investigation";
        $.ajax({
            url: investigationURL,
            method: "GET"
        }).then(function (investigationRes) {
            $("#investigation-text").text(investigationRes.desc)
        });

    //MEDICINE
        //create Title html element
        var medicineTitle = $('<h2>');
        // add text for the h1 tag
        $(medicineTitle).text("Medicine");
        // append the modal1h1 to the div
        $(skillModal).append(medicineTitle);

        //creates tags for description text
        var medicineText = $('<p>');
        $(medicineText).attr('id', 'medicine-text');
        // add text for the h1 tag
        $(medicineText).text(" ");
        // append the modal1h1 to the div
        $(skillModal).append(medicineText);

        //API "gets" spell info
        var medicineURL = "https://www.dnd5eapi.co/api/skills/medicine";
        $.ajax({
            url: medicineURL,
            method: "GET"
        }).then(function (medicineRes) {
            $("#medicine-text").text(medicineRes.desc)
        });

    //NATURE
        //create Title html element
        var natureTitle = $('<h2>');
        // add text for the h1 tag
        $(natureTitle).text("Nature");
        // append the modal1h1 to the div
        $(skillModal).append(natureTitle);

        //creates tags for description text
        var natureText = $('<p>');
        $(natureText).attr('id', 'nature-text');
        // add text for the h1 tag
        $(natureText).text(" ");
        // append the modal1h1 to the div
        $(skillModal).append(natureText);

        //API "gets" spell info
        var natureURL = "https://www.dnd5eapi.co/api/skills/nature";
        $.ajax({
            url: natureURL,
            method: "GET"
        }).then(function (natureRes) {
            $("#nature-text").text(natureRes.desc)
        });

    //PERCEPTION
        //create Title html element
        var perceptionTitle = $('<h2>');
        // add text for the h1 tag
        $(perceptionTitle).text("Perception");
        // append the modal1h1 to the div
        $(skillModal).append(perceptionTitle);

        //creates tags for description text
        var perceptionText = $('<p>');
        $(perceptionText).attr('id', 'perception-text');
        // add text for the h1 tag
        $(perceptionText).text(" ");
        // append the modal1h1 to the div
        $(skillModal).append(perceptionText);

        //API "gets" spell info
        var perceptionURL = "https://www.dnd5eapi.co/api/skills/perception";
        $.ajax({
            url: perceptionURL,
            method: "GET"
        }).then(function (perceptionRes) {
            $("#perception-text").text(perceptionRes.desc)
        });

    //PERFORMANCE
        //create Title html element
        var performanceTitle = $('<h2>');
        // add text for the h1 tag
        $(performanceTitle).text("Performance");
        // append the modal1h1 to the div
        $(skillModal).append(performanceTitle);

        //creates tags for description text
        var performanceText = $('<p>');
        $(performanceText).attr('id', 'performance-text');
        // add text for the h1 tag
        $(performanceText).text(" ");
        // append the modal1h1 to the div
        $(skillModal).append(performanceText);

        //API "gets" spell info
        var performanceURL = "https://www.dnd5eapi.co/api/skills/performance";
        $.ajax({
            url: performanceURL,
            method: "GET"
        }).then(function (performanceRes) {
            $("#performance-text").text(performanceRes.desc)
        });

    //PERSUASION
        //create Title html element
        var persuasionTitle = $('<h2>');
        // add text for the h1 tag
        $(persuasionTitle).text("Persuasion");
        // append the modal1h1 to the div
        $(skillModal).append(persuasionTitle);

        //creates tags for description text
        var persuasionText = $('<p>');
        $(persuasionText).attr('id', 'persuasion-text');
        // add text for the h1 tag
        $(persuasionText).text(" ");
        // append the modal1h1 to the div
        $(skillModal).append(persuasionText);

        //API "gets" spell info
        var persuasionURL = "https://www.dnd5eapi.co/api/skills/persuasion";
        $.ajax({
            url: persuasionURL,
            method: "GET"
        }).then(function (persuasionRes) {
            $("#persuasion-text").text(persuasionRes.desc)
        });

    //RELIGION
        //create Title html element
        var religionTitle = $('<h2>');
        // add text for the h1 tag
        $(religionTitle).text("Religion");
        // append the modal1h1 to the div
        $(skillModal).append(religionTitle);

        //creates tags for description text
        var religionText = $('<p>');
        $(religionText).attr('id', 'religion-text');
        // add text for the h1 tag
        $(religionText).text(" ");
        // append the modal1h1 to the div
        $(skillModal).append(religionText);

        //API "gets" spell info
        var religionURL = "https://www.dnd5eapi.co/api/skills/religion";
        $.ajax({
            url: religionURL,
            method: "GET"
        }).then(function (religionRes) {
            $("#religion-text").text(religionRes.desc)
        });

    //SLEIGHT OF HAND
        //create Title html element
        var sleightTitle = $('<h2>');
        // add text for the h1 tag
        $(sleightTitle).text("Sleight of Hand");
        // append the modal1h1 to the div
        $(skillModal).append(sleightTitle);

        //creates tags for description text
        var sleightText = $('<p>');
        $(sleightText).attr('id', 'sleight-text');
        // add text for the h1 tag
        $(sleightText).text(" ");
        // append the modal1h1 to the div
        $(skillModal).append(sleightText);

        //API "gets" spell info
        var sleightURL = "https://www.dnd5eapi.co/api/skills/sleight-of-hand";
        $.ajax({
            url: sleightURL,
            method: "GET"
        }).then(function (sleightRes) {
            $("#sleight-text").text(sleightRes.desc)
        });

    //STEALTH
        //create Title html element
        var stealthTitle = $('<h2>');
        // add text for the h1 tag
        $(stealthTitle).text("Stealth");
        // append the modal1h1 to the div
        $(skillModal).append(stealthTitle);

        //creates tags for description text
        var stealthText = $('<p>');
        $(stealthText).attr('id', 'stealth-text');
        // add text for the h1 tag
        $(stealthText).text(" ");
        // append the modal1h1 to the div
        $(skillModal).append(stealthText);

        //API "gets" spell info
        var stealthURL = "https://www.dnd5eapi.co/api/skills/stealth";
        $.ajax({
            url: stealthURL,
            method: "GET"
        }).then(function (stealthRes) {
            $("#stealth-text").text(stealthRes.desc)
        });

    //SURVIVAL
        //create Title html element
        var survivalTitle = $('<h2>');
        // add text for the h1 tag
        $(survivalTitle).text("Survival");
        // append the modal1h1 to the div
        $(skillModal).append(survivalTitle);

        //creates tags for description text
        var survivalText = $('<p>');
        $(survivalText).attr('id', 'survival-text');
        // add text for the h1 tag
        $(survivalText).text(" ");
        // append the modal1h1 to the div
        $(skillModal).append(survivalText);

        //API "gets" spell info
        var survivalURL = "https://www.dnd5eapi.co/api/skills/survival";
        $.ajax({
            url: survivalURL,
            method: "GET"
        }).then(function (survivalRes) {
            $("#survival-text").text(survivalRes.desc)
        });


    //CREATES CLOSE BUTTON
        var eClose = $('<button>');
        // add the class and attr for the button
        $(eClose).addClass('close-button');
        $(eClose).attr('data-close', '');
        $(eClose).attr('aria-label', 'Close reveal');
        $(eClose).attr('type', 'button');
        // add the span for the close button
        $(eClose).html('<span aria-hidden="true">&times;</span>');
        // append the button to the div
        $(skillModal).append(eClose);
        //Document functionality with Foundation
        $(document).foundation();
        $('#skillguide-modal').foundation('open');
});
