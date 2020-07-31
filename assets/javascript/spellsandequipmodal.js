$(document).foundation();

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
                // append the modal to the div
                $(equipModal).append(fbdTitle);

                //creates tags for description text
                var fbdText = $('<p>');
                $(fbdText).attr('id', 'fbd-text');
                // add text for the h1 tag
                $(fbdText).text(" ");
                // append the modal to the div
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
                // append the modal to the div
                $(equipModal).append(mhdTitle);

                //creates tags for description text
                var mhdText = $('<p>');
                $(mhdText).attr('id', 'mhd-text');
                // add text for the h1 tag
                $(mhdText).text(" ");
                // append the modal to the div
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
                // add text for the h2 tag
                $(mmdTitle).text("Magic Missile");
                // append the modal to the div
                $(equipModal).append(mmdTitle);

                //creates tags for description text
                var mmdText = $('<p>');
                $(mmdText).attr('id', 'mmd-text');
                // add text for the p tag
                $(mmdText).text(" ");
                // append the modal to the div
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
                // add text for the h2 tag
                $(madTitle).text("Mage Armor");
                // append the modal to the div
                $(equipModal).append(madTitle);

                //creates tags for description text
                var madText = $('<p>');
                $(madText).attr('id', 'mad-text');
                // add text for the p tag
                $(madText).text(" ");
                // append the modal to the div
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
        }
                
    //--------FIGHTER GUIDE--------

        else if (classEquip === "Fighter") {

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
                // add text for the h2 tag
                $(gwdTitle).text("Great Weapon Fighting Style");
                // append the modal to the div
                $(equipModal2).append(gwdTitle);

                //creates tags for description text
                var gwdText = $('<p>');
                $(gwdText).attr('id', 'gwd-text');
                // add text for the p tag
                $(gwdText).text(" ");
                // append the modal to the div
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
                // add text for the h2 tag
                $(swdTitle).text("Second Wind");
                // append the modal to the div
                $(equipModal2).append(swdTitle);

                //creates tags for description text
                var swdText = $('<p>');
                $(swdText).attr('id', 'swd-text');
                // add text for the p tag
                $(swdText).text(" ");
                // append the modal to the div
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
        }
                
    //--------CLERIC GUIDE--------

        else if (classEquip === "Cleric") {

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
                // add text for the h2 tag
                $(cwdTitle).text("Cure Wounds");
                // append the modal to the div
                $(equipModal3).append(cwdTitle);

                //creates tags for description text
                var cwdText = $('<p>');
                $(cwdText).attr('id', 'cwd-text');
                // add text for the p tag
                $(cwdText).text(" ");
                // append the modal to the div
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
                // add text for the h2 tag
                $(sddTitle).text("Spare The Dying");
                // append the modal to the div
                $(equipModal3).append(sddTitle);

                //creates tags for description text
                var sddText = $('<p>');
                $(sddText).attr('id', 'sdd-text');
                // add text for the p tag
                $(sddText).text(" ");
                // append the modal to the div
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
        }

    //--------ROGUE GUIDE--------

        else if (classEquip === "Rogue") {

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
                // add text for the h2 tag
                $(snkdTitle).text("Sneak Attack");
                // append the modal to the div
                $(equipModal4).append(snkdTitle);

                //creates tags for description text
                var snkdText = $('<p>');
                $(snkdText).attr('id', 'snkd-text');
                // add text for the p tag
                $(snkdText).text(" ");
                // append the modal to the div
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
                // add text for the h2 tag
                $(cantdTitle).text("Thieves' Cant");
                // append the modal to the div
                $(equipModal4).append(cantdTitle);

                //creates tags for description text
                var cantdText = $('<p>');
                $(cantdText).attr('id', 'cantd-text');
                // add text for the p tag
                $(cantdText).text(" ");
                // append the modal to the div
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
                // add text for the h2 tag
                $(ttdTitle).text("Thieves' Tools");
                // append the modal to the div
                $(equipModal4).append(ttdTitle);

                //creates tags for description text
                var ttdText = $('<p>');
                $(ttdText).attr('id', 'ttd-text');
                // add text for the p tag
                $(ttdText).text(" ");
                // append the modal to the div
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
        }

    //--------RANGER GUIDE--------      

        else if (classEquip === "Ranger") {

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
                // add text for the h2 tag
                $(fedTitle).text("Favored Enemy");
                // append the modal to the div
                $(equipModal5).append(fedTitle);

                //creates tags for description text
                var fedText = $('<p>');
                $(fedText).attr('id', 'fed-text');
                // add text for the p tag
                $(fedText).text(" ");
                // append the modal to the div
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
                // add text for the h2 tag
                $(nedTitle).text("Natural Explorer");
                // append the modal to the div
                $(equipModal5).append(nedTitle);

                //creates tags for description text
                var nedText = $('<p>');
                $(nedText).attr('id', 'ned-text');
                // add text for the p tag
                $(nedText).text(" ");
                // append the modal to the div
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