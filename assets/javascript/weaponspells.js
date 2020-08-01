//EQUIPMENT AND SPELLS HTML

function weaponsSpells() {

    var classEquip = localStorage.getItem("charClass");

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