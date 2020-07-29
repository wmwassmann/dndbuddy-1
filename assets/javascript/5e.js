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





//SPELLS AND EQUIPMENT MODAL


$("#equipment-guide").click(function () {
    
    event.preventDefault();
    $(document).foundation();
    var classEquip = localStorage.getItem("charClass");

    

        if (classEquip === "Wizard") {
            // function wizardSpellsGuideRender() {
                
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

                // create a button tag for the close button
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
            
        }else if (classEquip === "Fighter") {


        
            // function fighterWeaponsGuideRender() {
                
                // create a div for the modal
                var equipModal2 = $('<div>');
                // add class and ID for modal
                $(equipModal2).addClass('reveal revealStyle');
                $(equipModal2).attr('id', 'equipguide-modal');
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



                // create a button tag for the close button
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
                $('#equipguide-modal').foundation('open');
            
        }
});        







//EQUIPMENT




function weaponsSpells() {
    // console.log("weapons function is running");
    var classEquip = localStorage.getItem("charClass");

    console.log(classEquip);
//--------WIZARD SPELLS AND GUIDE GENERATE HERE--------
         
        if (classEquip === "Wizard") {
                
            var fireboltURL = "https://www.dnd5eapi.co/api/spells/fire-bolt";
            var magehandURL = "https://www.dnd5eapi.co/api/spells/mage-hand";
            var magicmissileURL = "https://www.dnd5eapi.co/api/spells/magic-missile";
            var magearmorURL = "https://www.dnd5eapi.co/api/spells/mage-armor";
            $.ajax({
                url: fireboltURL,
                method: "GET"
            }).then(function (fbRes) {
                //FIREBOLT HTML
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

            //WIZARD GUIDE RENDER FUNCTION    
            // wizardSpellsGuideRender();
            

        
        }else if (classEquip === "Fighter") {
            
            //FIGHTER HELP GUIDE RENDERS


            //GREATSWORD HTML
            $('#equipment-1').html("<h5>" + "Greatsword: (2d6)+2 slashing damage" + "</h5>")
            //MEDIUM ARMOR HTML
            .append("<h5>" + "Medium Armor" + "</h5>");
            $("#equipment-2").html(" ");
            $("#equipment-3").html(" ");
            $("#equipment-4").html(" ");
            $("#equipment-5").html(" ");
            //FIGHTER GUIDE RENDER FUNCTION                
            // fighterWeaponsGuideRender();
            
        }

            // $("#equipguide-modal").
            //SPELLS AND EQUIPMENT MODAL

            

//--------FIGHTER WEAPONS AND GUIDE GENERATE HERE--------    
      


        
//--------CLERIC SPELLS AND WEAPONS GENERATE HERE--------
        if (classEquip === "Cleric");

        if (classEquip === "Rogue");

        if (classEquip === "Ranger");


}